import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const texts = ["Happy Birthday", "To", "Jeevita"];

export function TextTransition({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < texts.length - 1) {
        setShow(false);
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setShow(true);
        }, 500);
      } else {
        setShow(false);
        setTimeout(onComplete, 500);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-6xl font-bold text-pink-600"
        >
          {texts[currentIndex]}
        </motion.div>
      )}
    </AnimatePresence>
  );
}