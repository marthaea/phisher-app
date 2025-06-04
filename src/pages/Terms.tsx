
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { toast } from "sonner";

const Terms: React.FC = () => {
  const navigate = useNavigate();
  const [hasRead, setHasRead] = useState(false);

  const handleAccept = () => {
    toast.success("Terms accepted! Thank you.");
    navigate('/');
  };

  const handleDecline = () => {
    toast.error("You must accept the Terms to use Phisher.");
  };

  return (
    <div className="w-full min-h-screen bg-[#191E38]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="w-full bg-[#191E38] text-white px-5 py-16">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-phisher-white text-center text-5xl font-bold leading-[56px] mb-[30px]">
              TERMS AND CONDITIONS
            </h1>
            <p className="text-phisher-white text-center text-2xl font-medium leading-8 max-w-[800px] mx-auto">
              Effective May 15, 2025
            </p>
          </div>
        </section>

        {/* Terms Content Section */}
        <section className="max-w-[1000px] mx-auto px-5 py-16 text-white">
          <div className="prose prose-lg max-w-none">
            <p className="text-white mb-8">
              Welcome to Phisher! By accessing or using our platform (including our website, tools and tips), you agree to the following terms. Please read them carefully.
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">1. Use of Our Services</h2>
            <p className="text-white mb-4">
              Phisher is a free cybersecurity awareness tool designed to help users:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Detect potentially malicious URLs and email content.</li>
              <li>Receive Cyber tips</li>
            </ul>
            <p className="text-white mb-8">
              You agree to use Phisher responsibly and for personal, non-commercial purposes.
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">2. No Guarantees or Warantees</h2>
            <p className="text-white mb-8">
              Phisher provides educational content and tools only. We do not guarantee the accuracy or effectiveness of scan results. Always use caution and rely on additional tools and human judgment for critical decisions.
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">3. User Submissions</h2>
            <p className="text-white mb-4">
              When you submit URLs, email texts, or phishing reports:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>You grant us the right to use that information (anonymously) to improve our services.</li>
              <li>You must not submit offensive, harmful, or illegal content.</li>
              <li>You agree not to upload malicious files or violate any laws.</li>
            </ul>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">4. Intellectual Property</h2>
            <p className="text-white mb-8">
              All content on Phisher, including designs, text, graphics, logos, and tools, is the property of Phisher and its team. Please do not copy, reproduce, or redistribute without permission.
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">5. Limitation of Liability</h2>
            <p className="text-white mb-4">
              Phisher is not liable for:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Any loss or damage arising from reliance on our scan results or content.</li>
              <li>Any harm caused by malicious links you may encounter online. Use Phisher at your own risk.</li>
            </ul>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">6. Changes</h2>
            <p className="text-white mb-8">
              We may update these Terms from time to time. We'll notify users of significant changes. Continued use of Phisher means you accept the updated terms.
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">7. Contact Us</h2>
            <p className="text-white mb-12">
              For questions or concerns, please contact: @ https://www.linkedin.com/company/phisher
            </p>

            {/* Checkbox */}
            <div className="flex items-center gap-3 mb-8">
              <input 
                type="checkbox" 
                id="terms-read" 
                className="w-5 h-5 accent-[#00C48C]"
                onChange={() => setHasRead(!hasRead)} 
                checked={hasRead}
              />
              <label htmlFor="terms-read" className="text-white cursor-pointer">
                I have read and understood these terms
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16">
              <button 
                onClick={handleAccept}
                disabled={!hasRead}
                className={`px-8 py-3 rounded-md font-medium ${hasRead ? 'bg-[#00C48C] text-white hover:bg-opacity-90' : 'bg-gray-500 text-white cursor-not-allowed'}`}
              >
                ACCEPT
              </button>
              <button 
                onClick={handleDecline}
                className="px-8 py-3 bg-transparent border-2 border-[#00C48C] text-[#00C48C] rounded-md font-medium hover:bg-[#00C48C] hover:bg-opacity-10"
              >
                DECLINE
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
