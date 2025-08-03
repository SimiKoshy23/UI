import React from 'react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import Box from '@mui/material/Box';

const Footer = () => (
  <Box component="footer" sx={{zIndex: 1, backgroundColor: 'rgba(0,0,0,0.9)', padding: '1rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.85rem' }}>
    <Box sx={{ display: 'flex', gap: '1rem', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaTwitter /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaInstagram /></a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaGithub /></a>
    </Box>
    <Box sx={{ color: 'blue' }}>© {new Date().getFullYear()} MindfulSpace. All rights reserved.</Box>
  </Box>
);

export default Footer;
