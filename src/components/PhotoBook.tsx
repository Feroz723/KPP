import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';

const pages = [
  {
    image: p1,
    text: "Happy Birthday, Jeevita! Wishing you a fantastic day filled with love, laughter, and all the things that make you happiest!"
  },
  {
    image: p3,
    text: "Here's to celebrating you and all the amazing memories we've shared. May this year bring endless joy, success, and adventures your way!"
  },
  {
    image: p2,
    text: "Cheers to another year of greatness, my dear friend! Stay awesome, stay blessed, and keep shining bright. Have an unforgettable birthday!"
  }
];

export function PhotoBook({ onComplete }: { onComplete: () => void }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage === pages.length - 1) {
      onComplete();
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center gap-8 w-full max-w-6xl mx-auto bg-white rounded-lg shadow-2xl p-8"
    >
      <button
        onClick={handlePrev}
        disabled={currentPage === 0}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex gap-8 flex-1">
        <div className="w-1/2 aspect-[3/4] relative rounded-lg overflow-hidden">
          <motion.img
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={pages[currentPage].image}
            alt="Memory"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 flex items-center">
          <motion.p
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl text-gray-700 italic"
          >
            {pages[currentPage].text}
          </motion.p>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </motion.div>
  );
}