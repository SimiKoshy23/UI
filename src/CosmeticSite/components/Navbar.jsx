import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
    return (
        <AppBar position="static" color="inherit" elevation={1}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Beauty Bliss
                </Typography>
                <Box>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Products</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
