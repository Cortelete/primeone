import React, { useState, useEffect, useCallback } from 'react';
import { ModalType } from './types';
import { BIBLE_VERSES } from './constants';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import Modal from './components/Modal';
import EmailModalContent from './components/modals/EmailModalContent';
import LocationModalContent from './components/modals/LocationModalContent';
import RatingModalContent from './components/modals/RatingModalContent';
import FeedbackModalContent from './components/modals/FeedbackModalContent';
import CtaModalContent from './components/modals/CtaModalContent';
import { InstagramIcon, FacebookIcon, MailIcon, MapPinIcon, StarIcon, SparklesIcon } from './components/icons';

const clientLogos = [
  '/logoclient1.png',
  '/logoclient2.png',
  '/logoclient3.png',
  '/logoclient4.png',
  '/logoclient5.png',
];

const LOGOS = ['/coin.png', '/logo.png'];

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<ModalType | null>(null);
  const [verseIndex, setVerseIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVerseIndex((prevIndex) => (prevIndex + 1) % BIBLE_VERSES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      if (!isSpinning) {
        setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % LOGOS.length);
      }
    }, 5000);
    return () => clearInterval(logoInterval);
  }, [isSpinning]);
  
  const handleLogoClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 2000);
  };

  const openRatingFeedbackModal = useCallback(() => {
    setOpenModal(ModalType.FEEDBACK);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModal(null);
  }, []);


  const renderModalContent = () => {
    switch (openModal) {
      case ModalType.CTA:
        return <CtaModalContent closeModal={closeModal} />;
      case ModalType.EMAIL:
        return <EmailModalContent />;
      case ModalType.LOCATION:
        return <LocationModalContent />;
      case ModalType.RATING:
        return <RatingModalContent onLowRating={openRatingFeedbackModal} closeModal={closeModal} />;
      case ModalType.FEEDBACK:
        return <FeedbackModalContent closeModal={closeModal}/>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-black to-[#243447] animate-gradient min-h-screen w-full flex flex-col items-center justify-between p-2 sm:p-6 text-white overflow-x-hidden">
      <main className="w-full max-w-lg mx-auto flex flex-col items-center flex-grow justify-center">
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-8 w-full border border-slate-700/50 relative overflow-hidden">
          <div className="relative z-10">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
              <div 
                className="w-24 h-24 md:w-32 md:h-32 mb-2 sm:mb-4 cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={handleLogoClick}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 ${isSpinning ? 'animate-spin-fast' : 'hover:scale-105'}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={LOGOS[currentLogoIndex]}
                    alt="Prime One Logo"
                    className="absolute w-full h-full object-contain"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                  />
                  <img
                    src={LOGOS[(currentLogoIndex + 1) % LOGOS.length]}
                    alt="Prime One Logo"
                    className="absolute w-full h-full object-contain"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent animate-text-gradient">
                Prime One
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2 h-8 sm:h-10 transition-opacity duration-500 flex items-center justify-center">
                "{BIBLE_VERSES[verseIndex]}"
              </p>
            </div>

            {/* Links Section */}
            <div className="space-y-2 sm:space-y-3">
              {/* New CTA Button */}
              <button
                onClick={() => setOpenModal(ModalType.CTA)}
                className="w-full flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-bold transition-all duration-300 ease-in-out shadow-lg text-slate-800 cursor-pointer bg-gradient-to-r from-slate-200 to-white hover:shadow-white/20 hover:scale-[1.03] transform"
              >
                <div className="w-8 flex-shrink-0 text-slate-700"><SparklesIcon /></div>
                <span className="flex-grow text-center">I want Prime One at my Dealership!</span>
              </button>
              <hr className="border-white/10" />
              <LinkButton text="Instagram" icon={<InstagramIcon />} onClick={() => {}} disabled={true} />
              <LinkButton text="Facebook" icon={<FacebookIcon />} onClick={() => {}} disabled={true} />
              <LinkButton text="Email Us" icon={<MailIcon />} onClick={() => setOpenModal(ModalType.EMAIL)} />
              <LinkButton text="Dealership Locations" icon={<MapPinIcon />} onClick={() => setOpenModal(ModalType.LOCATION)} />
              <LinkButton text="Rate Our Service" icon={<StarIcon />} onClick={() => setOpenModal(ModalType.RATING)} />
            </div>

            {/* Client Logos Section */}
            <div className="mt-4 sm:mt-6 w-full border-t border-white/10 pt-3 sm:pt-4">
              <p className="text-center text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">Trusted by leading dealerships</p>
              <div 
                className="relative w-full h-10 sm:h-12 overflow-hidden"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
              >
                <div className="flex absolute left-0 animate-scroll">
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <img 
                      key={index} 
                      src={logo} 
                      className="h-6 sm:h-8 mx-6 sm:mx-8 object-contain" 
                      alt={`Client Logo ${index % clientLogos.length + 1}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />

      <Modal isOpen={openModal !== null} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default App;
