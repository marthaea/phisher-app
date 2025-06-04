
import React from 'react';

const WhyPhisher: React.FC = () => {
  return (
    <section className="w-full bg-[#191E38] text-phisher-white px-5 py-16">
      <div className="max-w-[1234px] mx-auto">
        <h2 className="text-phisher-white text-4xl font-bold leading-[44px] mb-12 text-center md:text-left">
          Why Phisher?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Illustration - Using the same image as tip 2 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/greenpc.jpg" 
              alt="Why Choose Phisher" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Features List */}
          <div className="w-full md:w-1/2">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-phisher-green text-xl font-semibold mb-1">No Sign-Up Required</h3>
                  <p className="text-phisher-white">Start scanning instantly. No accounts, no friction.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-phisher-green text-xl font-semibold mb-1">Easy-to-use for everyone</h3>
                  <p className="text-phisher-white">Made for everyday users no jargon, no confusion.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-phisher-green text-xl font-semibold mb-1">Real-time threat detection</h3>
                  <p className="text-phisher-white">Scan links and emails instantly for red flags.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-phisher-green text-xl font-semibold mb-1">Cybersecurity education</h3>
                  <p className="text-phisher-white">Learn how to stay safe online with bite-sized tips.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-phisher-green text-xl font-semibold mb-1">Built for Students & Businesses</h3>
                  <p className="text-phisher-white">Perfect for schools, freelancers, and small teams.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPhisher;
