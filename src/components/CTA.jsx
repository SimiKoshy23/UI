import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="animate-fadeIn" style={{ padding: '3rem 0', backgroundColor: 'rgba(0,0,0,0.7)', textAlign: 'center' }}>
      <motion.button
        className="animate-glowPulse"
        style={{
          padding: '1rem 2.5rem',
          fontSize: '1.2rem',
          borderRadius: '9999px',
          background: 'linear-gradient(to right, #3b82f6, #14b8a6)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)',
        }}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10, duration: 1.2 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(20, 184, 166, 0.6)', transition: { duration: 0.4 } }}
      >
        Start Session
      </motion.button>
    </div>
  );
};

export default CTA;
