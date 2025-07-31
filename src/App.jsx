import { useEffect } from 'react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { PiMoonStarsDuotone, PiTimerDuotone, PiTargetDuotone } from 'react-icons/pi';
import { motion } from 'framer-motion';

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

const features = [
  'Reduce stress and anxiety',
  'Improve focus and clarity',
  'Enhance emotional well-being',
  'Sleep better and feel refreshed',
];

// 🔹 Shared transition settings
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
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      textAlign: 'center',
      padding: '0 1rem',
    }}>
      
      {/* 🌊 Animated Hero Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: [1.1, 1, 1.02, 1], opacity: 1, y: [0, 5, 0] }}
        transition={{
          ...floatEffect,
          opacity: { duration: 4.5, ease: [0.25, 0.1, 0.25, 1] },
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />

      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'fixed',
        width: '100vw',
        top: 0,
        zIndex: 50,
        maxWidth: '1650px',
        margin: '0 auto',
        left: 0,
        right: 0,
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MindfulSpace</div>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#sessions" style={{ color: 'white', textDecoration: 'none' }}>Sessions</a>
          <a href="#why" style={{ color: 'white', textDecoration: 'none' }}>Why Meditate?</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ paddingTop: '7rem', paddingBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.h1
          style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={easeOut}
        >
          Breathe. Relax. Reconnect.
        </motion.h1>
        <motion.p
          style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'rgba(255,255,255,0.9)', textAlign: 'center' }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeOut, delay: 0.3 }}
        >
          Take a moment to center yourself and find inner peace through guided meditation.
        </motion.p>
    <motion.button
  style={{
    padding: '0.75rem 2rem',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '9999px',
    fontSize: '1rem',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
  }}
  initial={{ opacity: 1 }}
  animate={{ opacity: [1, 0.7, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  whileHover={{
    scale: 1.05,
    backgroundColor: 'rgba(255,255,255,0.3)',
    boxShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
    transition: { duration: 0.3 },
  }}
>
  Start Now
</motion.button>


      </section>

      {/* Sessions Section */}
      <section id="sessions" style={{ padding: '4rem 0', backgroundColor: 'rgba(0,0,0,0.6)' }}>
        <motion.h2
          style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={easeOut}
        >
          Explore Our Sessions
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {sessions.map((s, i) => (
            <motion.div
              key={s.title}
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '1.5rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                width: '280px',
                textAlign: 'left',
              }}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...easeOut, delay: i * 0.2 }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{s.title}</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Meditate */}
      <section id="why" style={{ padding: '4rem 1rem', background: 'linear-gradient(to bottom, #000, #111)' }}>
        <motion.h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={easeOut}>
          Why Meditate?
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {features.map((f, i) => (
           <motion.p
  key={f}
  style={{
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '1rem',
    borderRadius: '1rem',
    backdropFilter: 'blur(10px)',
    fontSize: '0.95rem',
  }}
  initial={{ opacity: 0, y: 40, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 1.2,
    ease: [0.42, 0, 0.58, 1], // standard easeInOut
    delay: i * 0.2,
  }}
>
  {f}
</motion.p>

          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ padding: '3rem 0', backgroundColor: 'rgba(0,0,0,0.7)', textAlign: 'center' }}>
       <motion.button
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
  transition={{
    type: 'spring',
    stiffness: 120,
    damping: 10,
    duration: 1.2,
  }}
  whileHover={{
    scale: 1.1,
    boxShadow: '0 0 30px rgba(20, 184, 166, 0.6)',
    transition: { duration: 0.4 },
  }}
>
  Start Session
</motion.button>


      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'rgba(0,0,0,0.9)', padding: '1rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaInstagram /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaGithub /></a>
        </div>
        <div>© {new Date().getFullYear()} MindfulSpace. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
