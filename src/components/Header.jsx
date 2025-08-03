import React from 'react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import Box from '@mui/material/Box';

const Header = () => (
  <Box component="header" sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 50,
    maxWidth: '1650px',
    margin: '0 auto',
    left: 0,
    right: 0,
  }}>
    <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>MindfulSpace</Box>
    <Box component="nav" sx={{ display: 'flex', gap: '1.5rem', marginRight: '30px' }}>
      <a href="#sessions" style={{ color: 'white', textDecoration: 'none' }}>Sessions</a>
      <a href="#why" style={{ color: 'white', textDecoration: 'none' }}>Why Meditate?</a>
    </Box>
  </Box>
);

export default Header;
