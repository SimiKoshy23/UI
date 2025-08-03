import React from 'react';
import { motion } from 'framer-motion';
import { motion as m } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const floatEffect = {
  scale: {
    duration: 3,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  },
  y: {
    duration: 6,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  },
};
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const letter = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const easeOut = { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] };

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Hero = () => (
  <section className="animate-fadeIn" style={{ paddingTop: '7rem', marginTop:"3.5rem" ,paddingBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <MotionTypography
      component="h1"
      variant="h1"
      style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)', overflow: 'hidden', color: 'white', textAlign: 'center' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {"Breathe. Relax. Reconnect.".split("").map((char, idx) => (
        <motion.span key={idx} variants={letter} style={{ display: 'inline-block', color: 'white' }}>
          {char}
        </motion.span>
      ))}
    </MotionTypography>
    <MotionTypography
      variant="body1"
      style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'rgba(255,255,255,0.9)', textAlign: 'center' }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...easeOut, delay: 0.3 }}
    >
      Take a moment to center yourself and find inner peace through guided meditation.
    </MotionTypography>
    <MotionButton
      variant="contained"
      style={{ padding: '0.75rem 2rem', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '9999px', fontSize: '1rem', color: 'white', boxShadow: '0 0 20px rgba(255,255,255,0.1)', transformOrigin: 'left center' }}
      initial={{ scaleX: 0.2, opacity: 0, x: -50 }}
      animate={{ scaleX: 1, opacity: 1, x: 0 }}
      transition={{ ...easeOut, delay: 0.6 }}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)', boxShadow: '0 0 30px rgba(255,255,255,0.4)', transition: { duration: 0.3 } }}
    >
      Start Now
    </MotionButton>
  </section>
);

export default Hero;
