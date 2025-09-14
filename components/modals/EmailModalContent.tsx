import React from 'react';

const EmailModalContent: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Contact Us</h2>
      <p className="text-center text-gray-400 mb-6">Let's discuss how we can elevate your dealership's presentation.</p>
      <form action="https://formsubmit.co/your-primeone-email@example.com" method="POST" className="space-y-4">
        {/* Replace with your actual email in the action attribute */}
        <input type="hidden" name="_subject" value="New Inquiry from Prime One Link Page!" />
        <input type="hidden" name="_captcha" value="false" />
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
          <input type="text" name="name" id="name" required className="w-full bg-white/10 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-slate-400 focus:outline-none transition" />
        </div>
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-300 mb-1">Dealership & Region</label>
          <input type="text" name="region" id="region" placeholder="e.g., Miami, Fort Lauderdale" required className="w-full bg-white/10 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-slate-400 focus:outline-none transition" />
        </div>
        <div>
          <label htmlFor="inquiry" className="block text-sm font-medium text-gray-300 mb-1">What are you looking for?</label>
          <textarea name="inquiry" id="inquiry" rows={4} required className="w-full bg-white/10 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-slate-400 focus:outline-none transition" placeholder="e.g., 'Need a reliable detail & carwash team for our dealership.' or 'Saw your work on Instagram...'"></textarea>
        </div>
        
        <button type="submit" className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105">Send Message</button>
      </form>
    </div>
  );
};

export default EmailModalContent;