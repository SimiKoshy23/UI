import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sessions from './components/Sessions';
import WhyMeditate from './components/WhyMeditate';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { PiMoonStarsDuotone, PiTimerDuotone, PiTargetDuotone } from 'react-icons/pi';

const sessions = [
	{
		title: 'Deep Sleep',
		desc: 'Drift into restful sleep with calming narration',
		icon: <PiMoonStarsDuotone />,
	},
	{
		title: 'Quick Calm',
		desc: '5-minute reset to relax your mind quickly',
		icon: <PiTimerDuotone />,
	},
	{
		title: 'Focus Boost',
		desc: 'Sharpen attention with mindful breathing',
		icon: <PiTargetDuotone />,
	},
];

const easeOut = {
  duration: 1.8,
  ease: [0.25, 0.1, 0.25, 1],
};

const floatEffect = {
  scale: {
    duration: 10,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  },
  y: {
    duration: 12,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
  },
};


function App() {
  useEffect(() => {
	// Enable continuous gradient animation on body
	document.body.classList.add('animate-gradient');
	return () => {
	  document.body.classList.remove('animate-gradient');
	};
  }, []);
  return (
	 <div style={{
      fontFamily: 'Poppins, sans-serif',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      textAlign: 'center',
      padding: '0 1rem',
    }}>

	  <motion.div
        initial={{ scale: 1.1, opacity: 0, filter: 'brightness(100%)' }}
        animate={{ scale: [1.1, 1, 1.02, 1], opacity: 1, y: [0, 5, 0], filter: 'brightness(60%)' }}
        transition={{
          ...floatEffect,
          opacity: { duration: 4.5, ease: [0.25, 0.1, 0.25, 1] },
          filter: { duration: 1, delay: 1 },
        }}
        style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: "url('/meditation.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
      }} />

	  <Header />
	  <Hero />
	  <Sessions sessions={sessions} />
	  <WhyMeditate />
	  <CTA />
	  <Footer />
	 
	</div>
  );
}

export default App;

