
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-16 text-center">
        How Phisher Works
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2">
        {/* Step 1 */}
        <div className="flex flex-col items-center gap-4">
          <img 
            src="/pencil.jpg" 
            alt="Paste It" 
            className="w-24 h-24 rounded-md object-cover bg-[#00C48C] p-3"
          />
          <h3 className="text-white text-xl font-semibold">
            Paste It
          </h3>
          <p className="text-white text-center max-w-[250px]">
            Drop in any suspicious URL or email
          </p>
        </div>
        
        {/* Arrow 1 */}
        <div className="hidden md:flex justify-center items-center mx-2">
          <ArrowRight size={32} className="text-[#00C48C]" />
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col items-center gap-4">
          <img 
            src="/monitors.jpg" 
            alt="We Scan It" 
            className="w-24 h-24 rounded-md object-cover bg-[#00C48C] p-3"
          />
          <h3 className="text-white text-xl font-semibold">
            We Scan It
          </h3>
          <p className="text-white text-center max-w-[250px]">
            We check known database & red flags
          </p>
        </div>
        
        {/* Arrow 2 */}
        <div className="hidden md:flex justify-center items-center mx-2">
          <ArrowRight size={32} className="text-[#00C48C]" />
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col items-center gap-4">
          <img 
            src="/questionmark.jpg" 
            alt="You Learn" 
            className="w-24 h-24 rounded-md object-cover bg-[#00C48C] p-3"
          />
          <h3 className="text-white text-xl font-semibold">
            You Learn
          </h3>
          <p className="text-white text-center max-w-[250px]">
            Get instant tips on CyberSecurity
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
