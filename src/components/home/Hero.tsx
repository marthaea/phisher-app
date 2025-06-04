
import React, { useState, useEffect } from 'react';
import SearchInput from '../ui/SearchInput';
import { Link } from 'react-router-dom';
import { Globe, Mail, CheckCircle, AlertTriangle, Loader, Info, Shield, AlertCircleIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { analyzePhishingThreat } from '@/utils/api';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'url' | 'email'>('url');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<'safe' | 'unsafe' | 'suspicious' | null>(null);
  const [analysisDetails, setAnalysisDetails] = useState<any>(null);
  const [confidenceLevel, setConfidenceLevel] = useState<number>(0);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isLoading) {
      console.log('Starting progress animation');
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 80);
    } else {
      console.log('Stopping progress animation');
    }

    return () => {
      if (interval) {
        console.log('Cleaning up progress interval');
        clearInterval(interval);
      }
    };
  }, [isLoading]);

  // URL validation function
  const isValidURL = (string: string): boolean => {
    try {
      const url = new URL(string);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      // Check if it's a domain without protocol
      const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)*[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/;
      return domainRegex.test(string);
    }
  };

  // Email validation function
  const isValidEmail = (string: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(string) || string.includes('@') || string.toLowerCase().includes('email');
  };

  const handleSearch = async (searchQuery: string) => {
    console.log('=== SEARCH STARTED ===');
    console.log('Tab:', activeTab, 'Query:', searchQuery);
    
    if (!searchQuery.trim()) {
      toast({
        title: "Empty Input",
        description: `Please enter a valid ${activeTab === 'url' ? 'URL or domain' : 'email address or email content'} to analyze`,
        variant: "destructive",
      });
      return;
    }

    // Validate input based on active tab
    if (activeTab === 'url' && !isValidURL(searchQuery)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL (e.g., https://example.com) or domain (e.g., example.com)",
        variant: "destructive",
      });
      return;
    }

    if (activeTab === 'email' && !isValidEmail(searchQuery) && !searchQuery.includes('phishing') && !searchQuery.includes('scam')) {
      toast({
        title: "Invalid Email Input",
        description: "Please enter a valid email address or email content that you want to analyze for phishing",
        variant: "destructive",
      });
      return;
    }
    
    setQuery(searchQuery);
    setIsLoading(true);
    setResult(null);
    setAnalysisDetails(null);
    setConfidenceLevel(0);
    
    console.log('isLoading set to true');
    
    try {
      console.log(`Starting ${activeTab} analysis for: ${searchQuery}`);
      
      // Call the API with the user's input immediately - no delays
      const analysisResult = await analyzePhishingThreat(searchQuery, activeTab);
      console.log('Analysis result received:', analysisResult);
      
      if (!analysisResult.success) {
        console.log('API call failed, using fallback');
        if (analysisResult.fallbackResult) {
          const resultStatus = analysisResult.fallbackResult.result as 'safe' | 'unsafe' | 'suspicious';
          const details = analysisResult.fallbackResult.analysis;
          const confidence = Math.round(analysisResult.fallbackResult.confidence * 100);
          
          console.log('Setting fallback result:', resultStatus);
          setResult(resultStatus);
          setAnalysisDetails(details);
          setConfidenceLevel(confidence);
          
          showDetailedToast(resultStatus, confidence, activeTab, true);
        } else {
          console.log('No fallback result, throwing error');
          throw new Error(analysisResult.error as string);
        }
      } else {
        console.log('API call successful, processing result');
        const apiResult = analysisResult.data;
        let resultStatus: 'safe' | 'unsafe' | 'suspicious' = 'safe';
        
        if (apiResult.result) {
          resultStatus = apiResult.result.toLowerCase() as 'safe' | 'unsafe' | 'suspicious';
        }
        
        const details = apiResult.analysis;
        const confidence = Math.round((apiResult.confidence || 0.8) * 100);
        
        console.log('Setting API result:', resultStatus);
        setResult(resultStatus);
        setAnalysisDetails(details);
        setConfidenceLevel(confidence);
        
        showDetailedToast(resultStatus, confidence, activeTab, false);
      }
    } catch (error) {
      console.error("Analysis Error:", error);
      
      toast({
        title: "Analysis Failed",
        description: `Could not analyze the ${activeTab === 'url' ? 'URL' : 'email'} at this time. Please check your internet connection and try again.`,
        variant: "destructive",
      });
      
      console.log('Setting error result to suspicious');
      setResult('suspicious');
      setAnalysisDetails({ error: true, message: 'Analysis failed', type: activeTab });
      setConfidenceLevel(50);
    } finally {
      console.log('=== FINALLY BLOCK EXECUTED ===');
      console.log('Setting isLoading to false');
      setIsLoading(false);
      console.log('=== SEARCH COMPLETED ===');
    }
  };

  const showDetailedToast = (status: string, confidence: number, type: 'url' | 'email', isOffline: boolean) => {
    const offlineText = isOffline ? ' (Offline Mode)' : '';
    
    if (status === 'safe') {
      toast({
        title: `✅ ${type === 'url' ? 'Legitimate Website' : 'Safe Email'}${offlineText}`,
        description: `This ${type} appears to be legitimate with ${confidence}% confidence. ${getRecommendation(status, type)}`,
        variant: "default",
      });
    } else if (status === 'unsafe') {
      toast({
        title: `🚨 ${type === 'url' ? 'Phishing Website' : 'Phishing Email'} Detected${offlineText}`,
        description: `This ${type} is likely malicious with ${confidence}% confidence. ${getRecommendation(status, type)}`,
        variant: "destructive",
      });
    } else {
      toast({
        title: `⚠️ Suspicious ${type === 'url' ? 'Website' : 'Email'}${offlineText}`,
        description: `This ${type} shows suspicious patterns with ${confidence}% confidence. ${getRecommendation(status, type)}`,
        variant: "destructive",
      });
    }
  };

  const getRecommendation = (status: string, type: 'url' | 'email'): string => {
    if (status === 'safe') {
      return type === 'url' ? 'Safe to proceed with caution.' : 'Email appears legitimate.';
    } else if (status === 'unsafe') {
      return type === 'url' ? 'DO NOT enter personal information or login credentials.' : 'DO NOT click any links or download attachments.';
    } else {
      return type === 'url' ? 'Exercise extreme caution before proceeding.' : 'Verify sender through alternative means before taking any action.';
    }
  };

  const handleReset = () => {
    setQuery('');
    setResult(null);
    setAnalysisDetails(null);
    setConfidenceLevel(0);
  };

  const handleTabSwitch = (newTab: 'url' | 'email') => {
    setActiveTab(newTab);
    setResult(null);
    setAnalysisDetails(null);
    setConfidenceLevel(0);
    setQuery('');
  };

  // Display analysis details when available
  const renderAnalysisDetails = () => {
    if (!analysisDetails) return null;
    
    return (
      <div className="mt-4 p-4 bg-gray-800 rounded-lg text-left text-sm max-w-md mx-auto">
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <Shield size={16} className="text-[#00C48C]" />
          Detailed Analysis Report
        </h4>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Confidence Level:</span>
            <span className={`font-bold ${confidenceLevel >= 80 ? 'text-green-400' : confidenceLevel >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
              {confidenceLevel}%
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Analysis Type:</span>
            <span className="text-blue-300 capitalize">{activeTab} Analysis</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Recommendation:</span>
            <span className={`font-medium text-xs ${result === 'safe' ? 'text-green-400' : result === 'unsafe' ? 'text-red-400' : 'text-yellow-400'}`}>
              {result === 'safe' ? 'PROCEED' : result === 'unsafe' ? 'DO NOT PROCEED' : 'CAUTION'}
            </span>
          </div>

          {/* URL-specific details */}
          {activeTab === 'url' && (
            <>
              {analysisDetails.normalized_url && (
                <div className="pt-2 border-t border-gray-600">
                  <span className="text-gray-300 text-xs">Normalized URL:</span>
                  <p className="text-blue-300 text-xs break-all">{analysisDetails.normalized_url}</p>
                </div>
              )}
              {analysisDetails.known_phishing !== undefined && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Known Phishing DB:</span>
                  <span className={analysisDetails.known_phishing ? 'text-red-400' : 'text-green-400'}>
                    {analysisDetails.known_phishing ? 'Flagged' : 'Clean'}
                  </span>
                </div>
              )}
            </>
          )}

          {/* Email-specific details */}
          {activeTab === 'email' && (
            <>
              {analysisDetails.suspicious_patterns && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Suspicious Patterns:</span>
                  <span className="text-yellow-400">Detected</span>
                </div>
              )}
              {analysisDetails.email_analysis && (
                <div className="pt-2 border-t border-gray-600">
                  <span className="text-blue-300 text-xs">✓ Email content analysis completed</span>
                </div>
              )}
            </>
          )}

          {analysisDetails.fallback_mode && (
            <div className="pt-2 border-t border-gray-600">
              <span className="text-yellow-300 text-xs">⚠ Offline analysis mode</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full text-white px-6 md:px-16 lg:px-24 pt-10 pb-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
            Spot scams before they spot you
          </h1>
          <p className="text-white text-lg md:text-xl font-normal mb-6">
            Phisher helps you detect fake websites and phishing emails instantly.
          </p>
          
          {/* Tab Navigation with Globe/Mail Icon */}
          <div className="flex justify-center items-center w-40 mx-auto mb-6">
            <div className="flex w-full">
              <div 
                className={`w-1/2 text-center py-2 border-b-2 cursor-pointer transition-colors flex items-center justify-center gap-2 ${activeTab === 'url' ? 'border-[#00C48C] text-[#00C48C]' : 'border-transparent text-white'}`} 
                onClick={() => handleTabSwitch('url')}
              >
                <Globe size={16} />
                <span>URL</span>
              </div>
              <div 
                className={`w-1/2 text-center py-2 border-b-2 cursor-pointer transition-colors flex items-center justify-center gap-2 ${activeTab === 'email' ? 'border-[#00C48C] text-[#00C48C]' : 'border-transparent text-white'}`}
                onClick={() => handleTabSwitch('email')}
              >
                <Mail size={16} />
                <span>Email</span>
              </div>
            </div>
          </div>
          
          {/* Icon or Loading/Results Section */}
          <div className="mb-6 flex justify-center items-center h-32">
            {isLoading ? (
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-gray-600"></div>
                <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                  <circle
                    className="text-[#00C48C]"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="46"
                    cx="50"
                    cy="50"
                    strokeDasharray={`${progress * 2.89} 289`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  {progress < 95 ? (
                    <span className="text-white font-bold text-2xl">{progress}%</span>
                  ) : (
                    <Loader size={32} className="animate-spin text-white" />
                  )}
                </div>
              </div>
            ) : result ? (
              <div className="flex flex-col items-center">
                {result === 'safe' ? (
                  <>
                    <CheckCircle size={64} className="text-[#00C48C] mb-2" />
                    <p className="text-center text-white font-bold text-2xl">
                      {activeTab === 'url' ? 'Legitimate Site' : 'Safe Email'}
                    </p>
                  </>
                ) : result === 'suspicious' ? (
                  <>
                    <AlertTriangle size={64} className="text-yellow-500 mb-2" />
                    <p className="text-center text-white font-bold text-2xl">Suspicious</p>
                  </>
                ) : (
                  <>
                    <AlertCircleIcon size={64} className="text-red-500 mb-2" />
                    <p className="text-center text-white font-bold text-2xl">
                      {activeTab === 'url' ? 'Phishing Site' : 'Phishing Email'}
                    </p>
                  </>
                )}
              </div>
            ) : (
              activeTab === 'url' ? 
                <Globe size={64} className="text-[#00C48C]" /> : 
                <Mail size={64} className="text-[#00C48C]" />
            )}
          </div>
          
          {/* Show analysis details if available */}
          {result && renderAnalysisDetails()}
          
          {/* Search Form */}
          <div className="w-full max-w-lg mx-auto mt-4">
            <SearchInput 
              placeholder={
                activeTab === 'url' 
                  ? "Enter website URL, domain, or IP address" 
                  : "Enter email address or paste email content to analyze"
              }
              onSearch={handleSearch}
              buttonColor="#00C48C"
              buttonText={result ? "Scan Another" : "Analyze"}
              onReset={result ? handleReset : undefined}
            />
          </div>
          
          {/* Terms Text */}
          <p className="text-white text-opacity-70 text-center text-sm mt-6 max-w-lg mx-auto">
            By submitting the information above, you acknowledge and agree to our 
            <Link to="/terms" className="text-[#00C48C] hover:underline"> Terms of Service </Link>
            and <Link to="/policy" className="text-[#00C48C] hover:underline">Privacy Policy</Link>. 
            Please refrain from including any personal information, as we do not assume 
            responsibility for the content provided.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
