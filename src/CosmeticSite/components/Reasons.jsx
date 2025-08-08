import React from 'react';
import { Box, Typography } from '@mui/material';

// Static Reasons section
const Reasons = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', py: 4, gap: '15px' }}>
      {/* Left: Static text */}
      <Box sx={{ width: '50%', pl: 4, textAlign: 'left' }}>
        <Typography variant="h5" gutterBottom>
          Why Choose Our Products?
        </Typography>
        <Typography variant="body1" paragraph>
          Our cosmetics combine cutting-edge science with premium botanical extracts to deeply nourish and rejuvenate your skin. Each formula undergoes rigorous dermatologist testing for safety, efficacy, and gentle performance. We champion clean, sustainably sourced ingredients and cruelty-free practices to uphold both skin health and environmental responsibility. Experience long-lasting hydration, natural protection, and a radiant glow that reveals healthier-looking skin over time. Join our community and trust in our commitment to quality for a truly luxurious skincare journey.
        </Typography>
      </Box>
      {/* Right: Skincare steps blob */}
      <Box sx={{ width: '50%', pr: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Box sx={{
          width: '33vw',
          minHeight: 300,
          bgcolor: 'rgba(255,255,255,0.85)',
          clipPath: 'ellipse(75% 60% at 50% 50%)',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}>
          <Typography variant="h6" gutterBottom>
            Skincare Routine Steps
          </Typography>
          <Box component="ol" sx={{ m: 0, p: 0, pl: 2, listStylePosition: 'inside' }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Cleanse: Remove impurities with a gentle cleanser.
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Tone: Restore pH balance and minimize pores.
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Treat: Apply targeted serum or treatment.
            </Typography>
            <Typography component="li" variant="body1">
              Moisturize & Protect: Lock in hydration and finish with SPF.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reasons;
