import React from 'react';

interface LinkButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, icon, onClick, disabled = false }) => {
  const baseClasses = "w-full flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 ease-in-out shadow-lg";
  const enabledClasses = "bg-white/5 hover:bg-white/10 hover:scale-105 hover:shadow-white/10 text-white cursor-pointer";
  const disabledClasses = "bg-white/5 text-gray-500 cursor-not-allowed opacity-60";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? disabledClasses : enabledClasses}`}
    >
      <div className="w-8 flex-shrink-0">{icon}</div>
      <span className="flex-grow text-center">{text}</span>
      {disabled && <span className="text-xs text-gray-500 w-8 flex-shrink-0 text-right">Soon</span>}
    </button>
  );
};

export default LinkButton;