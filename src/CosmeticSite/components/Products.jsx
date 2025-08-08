import React from 'react';
import { motion } from 'framer-motion';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

// List of products to display
const products = [
  {
    name: 'Moisturizer',
    image: '/mosi.jpg',
    price: '$29.99',
  },
  {
    name: 'Sunscreen',
    image: '/Sunscreen.jpg',
    price: '$19.99',
  },
  {
    name: 'Serum',
    image: '/mosi.jpg',
    price: '$39.99',
  },
  {
    name: 'Toner',
    image: '/Sunscreen.jpg',
    price: '$24.99',
  },
];

const Products = ({ activeProduct }) => (
  <Box sx={{ bgcolor: '#ffffff', px: 4, py: 4 }}>
    <Typography variant="h4" align="center" sx={{ mb: 3 }}>
      Our Products
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {products.map((prod) => (
        <Card key={prod.name} sx={{ width: 200 }}>
          {prod.name === activeProduct ? (
            <CardMedia
              component={motion.img}
              layoutId={`product-${prod.name}`}
              className={`product-card-${prod.name}`}
              height="140"
              image={prod.image}
              alt={prod.name}
            />
          ) : (
            <CardMedia
              component="img"
              className={`product-card-${prod.name}`}
              height="140"
              image={prod.image}
              alt={prod.name}
            />
          )}
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              {prod.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {prod.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
);

export default Products;
