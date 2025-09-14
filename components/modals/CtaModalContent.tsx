import React, { useState } from 'react';

interface CtaModalContentProps {
  closeModal: () => void;
}

const CtaModalContent: React.FC<CtaModalContentProps> = ({ closeModal }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    
    // Using fetch to submit to formsubmit.co to avoid page reload
    fetch("https://formsubmit.co/your-primeone-cta-email@example.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formProps)
    })
    .then(() => {
        setSubmitted(true);
        setTimeout(() => {
            closeModal();
        }, 3000);
    })
    .catch(error => console.error('Form submission error:', error));
  };

  if (submitted) {
    return (
      <div className="text-center flex flex-col items-center justify-center h-64">
        <svg className="w-16 h-16 text-green-400 animate-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
          <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
        <h2 className="text-2xl font-bold mt-4 text-green-400">Thank You!</h2>
        <p className="text-gray-300 mt-2">We'll be in touch shortly to discuss a partnership.</p>
        <style>{`
          .animate-checkmark { animation: scale-in 0.4s ease-in-out; }
          .checkmark__circle { stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 2; stroke-miterlimit: 10; stroke: #4ade80; fill: none; animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards; }
          .checkmark__check { transform-origin: 50% 50%; stroke-dasharray: 48; stroke-dashoffset: 48; stroke-width: 3; stroke-linecap: round; stroke: #4ade80; animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards; }
          @keyframes stroke { 100% { stroke-dashoffset: 0; } }
          @keyframes scale-in { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 style={{ animationDelay: '100ms' }} className="animate-fade-in-up text-3xl font-bold mb-2 text-center bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
        Elevate Your Dealership
      </h2>
      <p style={{ animationDelay: '200ms' }} className="animate-fade-in-up text-center text-gray-400 mb-6">
        Partner with Prime One for unparalleled detailing that turns inventory into showcases.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="_subject" value="New Dealership Partnership Inquiry!" />
        <input type="hidden" name="_captcha" value="false" />
        
        <div style={{ animationDelay: '300ms' }} className="animate-fade-in-up">
          <label htmlFor="dealershipName" className="block text-sm font-medium text-gray-300 mb-1">Dealership Name</label>
          <input type="text" name="Dealership Name" id="dealershipName" required className="w-full bg-white/10 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-slate-400 focus:outline-none transition" />
        </div>
        <div style={{ animationDelay: '400ms' }} className="animate-fade-in-up">
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
          <input type="text" name="Contact Name" id="contactName" required className="w-full bg-white/10 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-slate-400 focus:outline-none transition" />
        </div>
        <div style={{ animationDelay: '500ms' }} className="animate-fade-in-up">
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input type="email" name="Email" id="contactEmail" required className="w-full bg-white/10 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-slate-400 focus:outline-none transition" />
        </div>
        <div style={{ animationDelay: '600ms' }} className="animate-fade-in-up">
          <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
          <input type="tel" name="Phone" id="contactPhone" required className="w-full bg-white/10 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-slate-400 focus:outline-none transition" />
        </div>
        
        <button style={{ animationDelay: '700ms' }} type="submit" className="animate-fade-in-up w-full bg-gradient-to-r from-slate-200 to-white text-slate-800 hover:shadow-white/20 font-bold py-3 rounded-lg transition-all transform hover:scale-105">
          Schedule a Consultation
        </button>
      </form>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s ease-out forwards;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default CtaModalContent;