
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#191E38] text-white px-5 py-16">
      <div className="max-w-[1234px] mx-auto">
        <h2 className="text-white text-4xl font-bold leading-[44px] mb-12 text-center">
          What Users Are Saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/purplelady.jpg" 
                alt="Ada" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-[#00C48C] font-semibold">Ada, University Student</p>
            </div>
            <p className="text-[#191E38] text-base">
              Phisher helped me catch a fake university email that almost tricked me. It's now my go-to tool before clicking any link.
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/greenguy.jpg" 
                alt="Victor" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-[#00C48C] font-semibold">Victor, Developer</p>
            </div>
            <p className="text-[#191E38] text-base">
              It's like having a mini cyber expert in your pocket. Fast, accurate and totally free.
            </p>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/greengirl.jpg" 
                alt="Gloria" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-[#00C48C] font-semibold">Gloria, Retired Nurse</p>
            </div>
            <p className="text-[#191E38] text-base">
              I'm not very techy, but Phisher was super easy to use. Just paste the link and it tells you what's wrong.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
