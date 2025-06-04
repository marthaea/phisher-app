
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
import { subscribeToNewsletter } from '@/utils/supabaseHelpers';
import { useToast } from '@/hooks/use-toast';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        toast({
          title: "Subscription Successful!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setEmail('');
      } else {
        throw new Error(result.error as string);
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      toast({
        title: "Subscription Failed",
        description: "Unable to subscribe at this time. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full border-t border-gray-300 px-6 md:px-16 lg:px-24 pt-12 pb-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo and Contact Section */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center mb-3">
              <img 
                src="/lovable-uploads/a5228301-3129-4745-adc6-146513939501.png" 
                alt="Phisher Logo" 
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-[#191E38] text-xl font-medium mb-2">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:thephisherhq@gmail.com" className="flex items-center gap-2 text-[#191E38]">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0H19C19.5523 0 20 0.44772 20 1V15C20 15.5523 19.5523 16 19 16H1C0.44772 16 0 15.5523 0 15V1C0 0.44772 0.44772 0 1 0ZM18 3.76283L10.6161 10.4411C10.2889 10.7407 9.7111 10.7407 9.3839 10.4411L2 3.76283V14H18V3.76283ZM2.93563 2L10 8.42652L17.0644 2H2.93563Z" fill="#191E38" />
                </svg>
                thephisherhq@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/company/phisher" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-[#191E38] hover:text-[#00C48C] transition-colors"
              >
                <Linkedin size={18} />
                linkedin.com/company/phisher
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-[#00C48C] text-base">
              Home
            </Link>
            <Link to="/terms" className="text-[#00C48C] text-base">
              Terms Of Service
            </Link>
            <Link to="/policy" className="text-[#00C48C] text-base">
              Privacy Policy
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#191E38] text-base mb-2">
              Stay in Touch with Phisher
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-gray-400 rounded-l-md p-2 text-[#191E38] focus:outline-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                className={`${isSubmitting ? 'bg-gray-400' : 'bg-[#00C48C]'} p-2 rounded-r-md`}
                aria-label="Subscribe"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowRight size={20} className="text-white" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="w-full h-px bg-gray-300 mb-5" />
        <div className="text-[#191E38] text-opacity-70 text-center text-sm">
          2025 Phisher. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
