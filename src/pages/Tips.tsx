
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const tipsData = [
  {
    title: "Think Before You Click",
    content: "Phishing links often look real but lead to fake sites. Hover to preview the URL, only click if it matches the official domain.",
    image: "/warning.jpg"
  },
  {
    title: "Check the Sender",
    content: "Scammers fake names to look legit. Always check the full email address, not just the display name.",
    image: "/greenpc.jpg"
  },
  {
    title: "Urgency = Red Flag",
    content: "Messages demanding immediate action are meant to scare you. Pause and verify before acting.",
    image: "/greentab.jpg"
  },
  {
    title: "Use Strong, Unique Passwords",
    content: "Avoid using the same password across sites. A breach on one site should not compromise all your accounts.",
    image: "/monitors.jpg"
  },
  {
    title: "Don't Trust Attachments",
    content: "Malware often hides in attachments. If you weren't expecting a file, dont open it, ask the sender first.",
    image: "/pencil.jpg"
  },
  {
    title: "Verify with the Source",
    content: "If you receive a suspicious message from a company, contact them directly through their official website, not via the message links or numbers.",
    image: "/questionmark.jpg"
  },
  {
    title: "Watch for Grammar Errors",
    content: "Poor Grammar and awkward phrasing are common signs of a phishing attempt. Legitimate companies proofread.",
    image: "/greengirl.jpg"
  },
  {
    title: "Secure Your Wi-Fi",
    content: "Set a strong password on your home Wi-Fi. Public networks are risk, avoid logging into sensitive accounts when using them.",
    image: "/greenguy.jpg"
  },
  {
    title: "Enable Two-Factor Authentication (2FA)",
    content: "2FA adds a security code sent to your phone or app. Even if your password is stolen, your account stays protected.",
    image: "/purplelady.jpg"
  },
  {
    title: "Report Suspicious Activity",
    content: "Don't ignore shady messages, report them to you IT team or email provider. You could save someone else from getting scammed.",
    image: "/purplelaptop.jpg"
  }
];

const Tips: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#191E38]">
      <Header />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-white mb-16 text-center">Phishing Prevention Tips</h1>
        
        <div className="space-y-24">
          {tipsData.map((tip, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-semibold text-[#00C48C] mb-4">{tip.title}</h2>
                <p className="text-white text-xl max-w-2xl">{tip.content}</p>
              </div>
              <img 
                src={tip.image} 
                alt={tip.title} 
                className="max-w-full w-full md:w-3/4 rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tips;
