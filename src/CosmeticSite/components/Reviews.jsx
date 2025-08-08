import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';

// Sample customer reviews
const reviews = [
  { name: 'Alice', comment: 'The moisturizer leaves my skin feeling soft and hydrated all day.', rating: 5 },
  { name: 'Bob', comment: 'Sunscreen is lightweight and non-greasy. Perfect for everyday use!', rating: 4 },
  { name: 'Carol', comment: 'The serum provided a visible glow after just one use. Love it!', rating: 5 },
  { name: 'Dave', comment: 'Toner helped minimize my pores without drying out my skin.', rating: 4 },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const timerRef = useRef(null);
  const restartRef = useRef(null);
  // helper to start auto-advance
  const startAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex(prev => (prev + 1) % reviews.length);
    }, 5000);
  };
  const visibleCount = 5;
  const prevSlide = () => {
    // pause auto on manual
    clearInterval(timerRef.current);
    clearTimeout(restartRef.current);
    setDirection(-1);
    setIndex(prev => (prev - 1 + reviews.length) % reviews.length);
    // resume after idle
    restartRef.current = setTimeout(startAuto, 5000);
  };
  const nextSlide = () => {
    clearInterval(timerRef.current);
    clearTimeout(restartRef.current);
    setDirection(1);
    setIndex(prev => (prev + 1) % reviews.length);
    restartRef.current = setTimeout(startAuto, 5000);
  };
  // Auto-advance reviews carousel on mount
  useEffect(() => {
    startAuto();
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(restartRef.current);
    };
  }, []);
  // create wrapping array
  const looped = [...reviews, ...reviews];
  const windowItems = looped.slice(index, index + visibleCount);
  return (
    <Box sx={{ p: 4, bgcolor: '#f9f9f9', overflow: 'hidden', position: 'relative', minHeight: '200px', mb: 5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">
          Customer Reviews
        </Typography>
      </Box>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={index}
          initial={{ x: direction === 1 ? '20%' : '-20%' }}
          animate={{ x: '0%' }}
          exit={{ x: direction === 1 ? '-20%' : '20%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '100px', left: 0, display: 'flex', flexWrap: 'nowrap', gap: '16px' }}
        >
          {windowItems.map((r, idx) => (
            <Box key={`${r.name}-${idx}`} sx={{ flex: '0 0 20%', height: 300 }}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Avatar>{r.name.charAt(0)}</Avatar>
                  <Typography variant="subtitle1">
                    {r.name}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {r.comment}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  {[...Array(5)].map((_, i) => (
                    i < r.rating ? <FaStar key={i} color="#FFD700" /> : <FaRegStar key={i} color="#FFD700" />
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </motion.div>
      </AnimatePresence>
      {/* Navigation Arrows with ripple click effect */}
      <IconButton
        onClick={prevSlide}
        sx={{ position: 'absolute', top: '150px', left: '8px', color: '#f0f0f0', zIndex: 2, bgcolor: 'transparent' }}
      >
        <FaChevronLeft size={32} />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{ position: 'absolute', top: '150px', right: '8px', color: '#f0f0f0', zIndex: 2, bgcolor: 'transparent' }}
      >
        <FaChevronRight size={32} />
      </IconButton>
    </Box>
  );
};

export default Reviews;
