import React, { useState, useCallback, useRef } from 'react';

const locations = [
  {
    name: "Prestige Imports Miami",
    address: "14800 Biscayne Blvd, North Miami Beach, FL 33181",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.26124533034!2d-80.1660796851624!3d25.92671898356138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad0a3d7c1e5d%3A0x7b33913054174de5!2sPrestige%20Imports!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Prestige+Imports+Miami"
  },
  {
    name: "Lexus of North Miami",
    address: "14100 Biscayne Blvd, North Miami, FL 33181",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.423924198116!2d-80.16615788516253!3d25.92095998356372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad0f7f3f3f3f%3A0x123456789abcdef0!2sLexus%20of%20North%20Miami!5e0!3m2!1sen!2sus!4v1690000000001!5m2!1sen!2sus",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lexus+of+North+Miami"
  },
  {
    name: "Florida Fine Cars",
    address: "2110 NW 107th Ave, Doral, FL 33172",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.544710341798!2d-80.3693256851654!3d25.78508498362571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9b9b9b9b9b9%3A0xfedcba9876543210!2sFlorida%20Fine%20Cars%20Doral!5e0!3m2!1sen!2sus!4v1690000000002!5m2!1sen!2sus",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Florida+Fine+Cars+Doral"
  }
];

const LocationModalContent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = 0; // Reset
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === 0 || touchEndX.current === 0) return;
    const distance = touchStartX.current - touchEndX.current;
    
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    
    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Our Partner Locations</h2>
      <p className="text-center text-gray-400 mb-4">We proudly serve top dealerships across the Florida coast.</p>
      
      <div 
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Track */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {locations.map((location, index) => (
            <div key={index} className="w-full flex-shrink-0 px-1">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-slate-300">{location.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{location.address}</p>
                <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-gray-700 mb-3">
                  <iframe
                    src={location.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.name}`}
                  ></iframe>
                </div>
                <a 
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 rounded-lg transition-all transform hover:scale-105 text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button onClick={handlePrev} className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/30 hover:bg-black/60 rounded-full p-2 text-white z-10 transition-colors" aria-label="Previous Location">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={handleNext} className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/30 hover:bg-black/60 rounded-full p-2 text-white z-10 transition-colors" aria-label="Next Location">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {locations.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-slate-300' : 'bg-gray-600'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationModalContent;