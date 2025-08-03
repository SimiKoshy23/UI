import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const features = [
  'Reduce stress and anxiety',
  'Improve focus and clarity',
  'Enhance emotional well-being',
  'Sleep better and feel refreshed',
];

const WhyMeditate = () => {
  const innerRef = useRef(null);
  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const style = getComputedStyle(inner);
    const gap = parseFloat(style.gap) || 0;
    const first = inner.children[0];
    const cardWidth = first ? first.offsetWidth + gap : 0;
    const intervalId = setInterval(() => {
      inner.style.transition = 'transform 2s ease-in-out';
      inner.style.transform = `translateX(-${cardWidth}px)`;
      const cleanup = () => {
        inner.style.transition = 'none';
        inner.style.transform = 'translateX(0)';
        inner.appendChild(inner.children[0]);
        inner.removeEventListener('transitionend', cleanup);
      };
      inner.addEventListener('transitionend', cleanup);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="why" className="animate-fadeIn" style={{ padding: '2rem 0', backgroundColor: 'rgba(0,0,0,0.8)', scrollMarginTop: '4rem' }}>
      <motion.h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: 'white' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.8, ease: [0.25,0.1,0.25,1] }} viewport={{ once: true }}>
        Why Meditate?
      </motion.h2>
      <div className="scroll-container" style={{ padding: '1rem', width: '100%', overflow: 'hidden', boxSizing: 'border-box' }}>
        <div className="carousel-inner" ref={innerRef} style={{ display: 'flex', gap: '1rem' }}>
          {features.map((f, i) => (
            <motion.p key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '1rem', backdropFilter: 'blur(10px)', fontSize: '0.95rem', flex: '0 0 calc((100% - 2rem)/3)', color: 'white' }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.42,0,0.58,1], delay: i * 0.2 }} viewport={{ once: true }}>
              {f}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeditate;
