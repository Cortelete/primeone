import React, { useState } from 'react';

interface FeedbackModalContentProps {
    closeModal: () => void;
}

const FeedbackModalContent: React.FC<FeedbackModalContentProps> = ({ closeModal }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
        closeModal();
    }, 2000);
  };

  if (submitted) {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 text-green-400">Thank You!</h2>
            <p className="text-gray-300">Your feedback is valuable and helps us improve our service.</p>
        </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center text-yellow-400">We're Sorry!</h2>
      <p className="text-center text-gray-400 mb-6">Please let us know what happened and how we can improve.</p>
      
      <form onSubmit={handleSubmit} action="https://formsubmit.co/your-primeone-feedback-email@example.com" method="POST" className="space-y-4">
        {/* Replace with your actual email in the action attribute */}
        <input type="hidden" name="_subject" value="Feedback Received (Low Rating)" />
        <input type="hidden" name="_captcha" value="false" />
        
        <div>
          <textarea 
            name="feedback" 
            rows={5} 
            required 
            className="w-full bg-white/10 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition" 
            placeholder="Your feedback here..."
          ></textarea>
        </div>
        
        <button type="submit" className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackModalContent;