
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveredEmail, setIsHoveredEmail] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between py-5 px-6 md:px-16 lg:px-24 bg-white">
      {/* Logo - now properly wrapped in Link with increased size */}
      <Link to="/" className="flex-shrink-0">
        <img 
          src="/lovable-uploads/a5228301-3129-4745-adc6-146513939501.png" 
          alt="Phisher Logo" 
          className="w-16 h-16"
        />
      </Link>

      {/* Desktop Navigation - moved to be next to the logo */}
      <nav className="hidden md:flex items-center gap-8 ml-8">
        <Link to="/" className="text-[#00C48C] text-center text-base font-semibold">
          Home
        </Link>
        <Link to="/tips" className="text-[#00C48C] text-center text-base font-semibold">
          Tips
        </Link>
        <Link to="/terms" className="text-[#00C48C] text-center text-base font-semibold">
          Terms
        </Link>
        <Link to="/policy" className="text-[#00C48C] text-center text-base font-semibold">
          Policy
        </Link>
      </nav>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div dangerouslySetInnerHTML={{
          __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"w-6 h-6 text-[#00C48C]\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" fill=\"none\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M4 6h16M4 12h16M4 18h16\"></path></svg>",
        }} />
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[60px] left-0 right-0 bg-white z-50 shadow-md p-5 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-[#00C48C] text-base font-semibold">
              Home
            </Link>
            <Link to="/tips" className="text-[#00C48C] text-base font-semibold">
              Tips
            </Link>
            <Link to="/terms" className="text-[#00C48C] text-base font-semibold">
              Terms
            </Link>
            <Link to="/policy" className="text-[#00C48C] text-base font-semibold">
              Policy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
