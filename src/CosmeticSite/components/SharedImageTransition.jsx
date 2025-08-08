import React, { useState, useEffect } from 'react';
import { motion, LayoutGroup, AnimatePresence, useScroll } from 'framer-motion';

const SharedImageTransition = () => {
  const placeholder = '/meditation.jpg'; // Replace with your image path
  const { scrollYProgress } = useScroll();
  const [showBottom, setShowBottom] = useState(false);
  useEffect(() => {
    return scrollYProgress.onChange((v) => setShowBottom(v > 0.5));
  }, [scrollYProgress]);
  return (
    <LayoutGroup>
      {/* Top hero section */}
      <AnimatePresence>
        {!showBottom && (
          <motion.div
            className="w-full h-screen flex justify-center items-center bg-soft-blue"
            layoutId="shared-image-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={placeholder}
              alt="Shared Element"
              layoutId="shared-image"
              className="w-1/2 md:w-1/3 object-cover rounded-lg shadow-lg"
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to allow scrolling */}
      <div className="h-screen"></div>

      {/* Bottom section with target image position */}
      <AnimatePresence>
        {showBottom && (
          <motion.div
            className="w-full h-screen flex justify-center items-center bg-soft-pink"
            layoutId="shared-image-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.img
              src={placeholder}
              alt="Shared Element"
              layoutId="shared-image"
              className="w-1/2 md:w-1/3 object-cover rounded-lg shadow-lg"
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default SharedImageTransition;
