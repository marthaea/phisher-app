
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-8 px-6 md:px-16 lg:px-24">
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Empower Your Digital Safety
          </h2>
        </div>
        <Link to="/tips">
          <button className="bg-[#00C48C] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
