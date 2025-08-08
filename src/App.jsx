import React, { useState, useEffect } from 'react';
import { LayoutGroup, useScroll } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from './CosmeticSite/components/Navbar';
import Hero from './CosmeticSite/components/Hero';
import Reasons from './CosmeticSite/components/Reasons';
import Products from './CosmeticSite/components/Products';
import Reviews from './CosmeticSite/components/Reviews';
import Footer from './CosmeticSite/components/Footer';
import SharedImageScroll from './CosmeticSite/components/SharedImageScroll';

function App() {
  // Track current hero slide
  const [activeProduct, setActiveProduct] = useState('Moisturizer');
  // Detect first scroll to lock transition
  const { scrollY } = useScroll();
  const [didScroll, setDidScroll] = useState(false);
  // Product captured at scroll start
  const [transitionProduct, setTransitionProduct] = useState(activeProduct);
  useEffect(() => {
    return scrollY.onChange((y) => {
      if (!didScroll && y > 10) {
        setDidScroll(true);
        setTransitionProduct(activeProduct);
      }
    });
  }, [scrollY, didScroll, activeProduct]);

  return (
    <LayoutGroup>
      <Box sx={{ bgcolor: '#e6f4ea', minHeight: '100vh' }}>
        <Navbar />
        <Hero onIndexChange={setActiveProduct} scrollStarted={didScroll} />
        {/* Shared image scroll effect */}
        <SharedImageScroll />
        {/* Animated reasons slider */}
        <Reasons />
        {/* Products section */}
        <Products activeProduct={transitionProduct} />
        {/* Customer reviews section */}
        <Reviews />
        {/* Footer */}
        <Footer />
      </Box>
    </LayoutGroup>
  );
}

export default App;