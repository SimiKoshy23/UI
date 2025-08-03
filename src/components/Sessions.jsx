import React from 'react';
import { motion } from 'framer-motion';

// Sessions list passed in as prop

const easeOut = { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] };

const Sessions = ({ sessions }) => (
  <section id="sessions" className="animate-fadeIn" style={{ padding: '3rem 0', backgroundColor: 'rgba(0,0,0,0.6)', scrollMarginTop: '7rem' }}>
    <motion.h2
      style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem', color: 'white' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={easeOut}
      viewport={{ once: true, amount: 0.5 }}
    >
      Explore Our Sessions
    </motion.h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
      {sessions.map((s, i) => (
        <motion.div
          key={s.title}
          className="glassmorphism-card"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '1.5rem',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            width: '280px',
            textAlign: 'left',
            transformOrigin: i === 0 ? 'left center' : i === sessions.length - 1 ? 'right center' : 'center center',
            color: 'white'
          }}
          initial={{ scaleX: 0.2, opacity: 0, x: i * 100 - 100 }}
          whileInView={{ scaleX: 1, opacity: 1, x: 0 }}
          transition={{ ...easeOut, delay: i * 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{s.title}</div>
          <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{s.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Sessions;
