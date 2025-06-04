
import React from 'react';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <div 
      className={`flex flex-col items-center w-[180px] cursor-pointer ${isActive ? 'text-phisher-green' : 'text-phisher-white'}`}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      tabIndex={0}
    >
      <div className="text-center text-[28px] font-semibold leading-9">
        {label}
      </div>
      <div className={`w-full h-[3px] ${isActive ? 'bg-phisher-green' : ''}`} />
    </div>
  );
};

export default TabButton;
