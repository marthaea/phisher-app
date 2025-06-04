
import React, { useState, useEffect } from 'react';

const features = [
  {
    title: "Think Before You Click",
    description: "Phishing links often look real but lead to fake sites. Hover to preview the URL, only click if it matches the official domain.",
    image: "/warning.jpg"
  },
  {
    title: "Check the Sender",
    description: "Scammers fake names to look legit. Always check the full email address, not just the display name.",
    image: "/greenpc.jpg"
  },
  {
    title: "Urgency = Red Flag",
    description: "Messages demanding immediate action are meant to scare you. Pause and verify before acting.",
    image: "/greentab.jpg"
  },
  {
    title: "Use Strong, Unique Passwords",
    description: "Avoid using the same password across sites. A breach on one site should not compromise all your accounts.",
    image: "/monitors.jpg"
  },
  {
    title: "Don't Trust Attachments",
    description: "Malware often hides in attachments. If you weren't expecting a file, dont open it, ask the sender first.",
    image: "/pencil.jpg"
  },
  {
    title: "Verify with the Source",
    description: "If you receive a suspicious message from a company, contact them directly through their official website, not via the message links or numbers.",
    image: "/questionmark.jpg"
  },
  {
    title: "Watch for Grammar Errors",
    description: "Poor Grammar and awkward phrasing are common signs of a phishing attempt. Legitimate companies proofread.",
    image: "/greengirl.jpg"
  },
  {
    title: "Secure Your Wi-Fi",
    description: "Set a strong password on your home Wi-Fi. Public networks are risk, avoid logging into sensitive accounts when using them.",
    image: "/greenguy.jpg"
  },
  {
    title: "Enable Two-Factor Authentication (2FA)",
    description: "2FA adds a security code sent to your phone or app. Even if your password is stolen, your account stays protected.",
    image: "/purplelady.jpg"
  },
  {
    title: "Report Suspicious Activity",
    description: "Don't ignore shady messages, report them to you IT team or email provider. You could save someone else from getting scammed.",
    image: "/purplelaptop.jpg"
  }
];

const FeatureSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            {features[activeFeature].title}
          </h2>
          <p className="text-white text-base md:text-lg">
            {features[activeFeature].description}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            key={activeFeature} 
            src={features[activeFeature].image} 
            alt={features[activeFeature].title} 
            className={`w-full max-w-md rounded-lg transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
