import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Product items for slider
const items = [
  {
	name: 'Moisturizer',
	image: '/mosi.jpg',
	description:
	  'Deeply hydrates skin with natural ingredients. Our formula locks in moisture for up to 24 hours, leaving your complexion soft and supple. Infused with vitamins and botanical extracts, it helps restore the skin’s natural barrier and defends against environmental stressors. Lightweight and non-greasy, it absorbs quickly for a fresh, dewy finish. Suitable for all skin types and daily use.',
  },
  {
	name: 'Sunscreen',
	image: '/Sunscreen.jpg',
	description:
	  'Shields your skin from harmful UVA and UVB rays with broad-spectrum SPF 50 protection. Enriched with antioxidants to neutralize free radicals and prevent premature aging. The lightweight formula glides on smoothly without white residue or heaviness. Water-resistant for up to 80 minutes, making it ideal for sports and beach days. Dermatologist-tested, non-comedogenic, and suitable for sensitive skin.',
  },
  {
	name: 'Serum',
	image: '/mosi.jpg',
	description:
	  'A potent blend of hyaluronic acid and peptides to plump and firm skin. This concentrated treatment penetrates deeply to boost collagen production and diminish fine lines. Rich in antioxidants, it brightens dull complexion and evens skin tone. Fast-absorbing and non-sticky, it layers seamlessly under moisturizer. Safe for morning and evening routines.',
  },
  {
	name: 'Toner',
	image: '/Sunscreen.jpg',
	description:
	  'Balances skin pH levels while visibly minimizing pores for a smoother texture. Infused with soothing witch hazel and rose water to calm irritation and maintain hydration. Gently removes residual impurities after cleansing, preparing skin for optimal absorption of serums and creams. Alcohol-free to prevent dryness. Leaves skin feeling refreshed and revitalized.',
  },
];

const Hero = ({ onIndexChange = () => {} }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => { 
	const timer = setInterval(() => { 
	  setIndex((prev) => (prev + 1) % items.length); 
	}, 3500); 
	return () => clearInterval(timer); 
  }, []);

  useEffect(() => { onIndexChange(items[index].name); }, [index, onIndexChange]);

  return (
	<Box
	  sx={{
		position: 'relative',
		width: '100%',
		height: 400,
		bgcolor: '#e6f4ea',
		overflowX: 'hidden',
		overflowY: 'visible',
		mb: '20px',
	  }}
	>
	  <Box
		sx={{
		  position: 'absolute',
		  top: 0,
		  left: 0,
		  width: '100%',
		  height: '100%',
		  display: 'flex',
		  gap: '10px',
		  alignItems: 'center',
		  justifyContent: 'center',
		}}
	  >
		{/* Static text container */}
		<Box sx={{ flex: 1, p: 2, maxWidth: '50%' }}>
		  <Typography variant="h4" gutterBottom>
			{items[index].name}
		  </Typography>
		  <Typography variant="body1">
			{items[index].description}
		  </Typography>
		</Box>
		{/* Sliding image container */}
		<Box sx={{ width: 300, height: '100%', overflow: 'hidden', position: 'relative' }}>
		  <motion.img
			key={items[index].name}
			layoutId={`product-${items[index].name}`}
			src={items[index].image}
			alt={items[index].name}
			initial={{ x: '-100%' }}
			animate={{ x: ['-100%', '0%', '0%', '100%'] }}
			transition={{ duration: 62, ease: 'easeInOut', times: [0, 0.016, 0.984, 1] }}
			style={{
			  width: '100%',
			  height: 'auto',
			  objectFit: 'contain',
			  borderRadius: '8px',
			  position: 'sticky',
			  top: 0,
			  zIndex: 10,
			}}
		  />
		</Box>
	  </Box>
	</Box>
  );
};

export default Hero;
