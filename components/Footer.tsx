
import React from 'react';

const Footer: React.FC = () => {
  const clientName = "Prime One";
  const developerWhatsApp = "+5541988710303";
  const message = encodeURIComponent(`Hello, I saw the link for ${clientName} and I want an amazing website like that! 🚀`);
  const whatsappLink = `https://wa.me/${developerWhatsApp}?text=${message}`;

  return (
    <footer className="w-full text-center text-gray-400 text-sm mt-4 sm:mt-8 pb-4">
      <div className="mb-4">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block transition-transform transform hover:scale-105 text-xs sm:text-sm"
        >
          Want a site like this? Contact me! 🚀
        </a>
      </div>
      <p>
        Developed by{' '}
        <a 
          href="https://www.instagram.com/inteligenciarte.ia" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold text-gray-300 hover:text-white transition-colors"
        >
          InteligenciArte.IA ✨
        </a>
      </p>
    </footer>
  );
};

export default Footer;