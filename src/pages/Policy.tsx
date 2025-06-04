
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Policy: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#191E38]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="w-full bg-[#191E38] text-white px-5 py-16">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-phisher-white text-center text-5xl font-bold leading-[56px] mb-[30px]">
              PRIVACY POLICY
            </h1>
            <p className="text-phisher-white text-center text-2xl font-medium leading-8 max-w-[800px] mx-auto">
              Effective May 15, 2025
            </p>
          </div>
        </section>

        {/* Policy Content Section */}
        <section className="max-w-[1000px] mx-auto px-5 py-16 text-white">
          <div className="prose prose-lg max-w-none">
            <p className="text-white mb-8">
              Your privacy is important to us. This Privacy Policy explains what data we collect, how we use it, and your rights.
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">1. What We Collect</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>URLs and email content you scan or analyze</li>
              <li>Optional email address if provided during reports or newsletter sign-up</li>
            </ul>
            <p className="text-white mb-8">
              We do not collect or store passwords, login credentials, or sensitive personal data.
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">2. How We Use Your Information</h2>
            <p className="text-white mb-4">
              We use your data to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Analyze and improve detection tools</li>
              <li>Share cyber awareness tips</li>
              <li>Monitor system performance and prevent abuse</li>
              <li>Respond to your inquiries (if contact info is provided)</li>
            </ul>
            <p className="text-white mb-8">
              We do not sell your data
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">3. Data Storage & Security</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Data is stored securely on encrypted servers</li>
              <li>Access is limited to authorized team members.</li>
              <li>We do not retain submitted content longer than necessary.</li>
            </ul>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">4. Third-Party Tools</h2>
            <p className="text-white mb-8">
              Phisher may use third-party services (e.g., analytics, hosting). These providers follow their own privacy policies, and we ensure they are compliant with data protection laws.
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">5. Your Rights</h2>
            <p className="text-white mb-4">
              You can:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Request access to your data.</li>
              <li>Request deletion of your submitted email or reports</li>
              <li>Opt out of non-essentials emails</li>
            </ul>
            <p className="text-white mb-8">
              Contact us at https://www.linkedin.com/company/phisher
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">6. Children's Privacy</h2>
            <p className="text-white mb-8">
              Phisher is not intended for users under 13. We do not knowingly collect data from children.
            </p>

            <h2 className="text-[#00C48C] text-3xl font-bold mb-5">7. Changes</h2>
            <p className="text-white mb-8">
              We may update this Privacy Policy. You will be notified of major changes on our website.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;
