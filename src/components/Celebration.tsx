import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export function Celebration() {
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000', '#ffd700', '#ff69b4']
      });
      
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000', '#ffd700', '#ff69b4']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold text-pink-600 mb-4">
        Happy Birthday! Jeevita
      </h1>
      <p className="text-2xl text-gray-700">
        May your day be filled with joy, laughter, and endless love! ❤️
      </p>
    </motion.div>
  );
}