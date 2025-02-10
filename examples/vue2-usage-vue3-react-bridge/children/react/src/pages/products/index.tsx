import React from 'react';
import { Card, Grid, Typography, Button, Chip, Box } from '@mui/material';

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductDetail: React.FC = () => {
  const product: Product = {
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: '$99.99',
    image: 'https://via.placeholder.com/150'
  };

  const handleAddToCart = () => {
    console.log('Product added to cart:', product);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Card>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img 
                src={product.image} 
                alt="Product Image" 
                style={{ 
                  width: '100%', 
                  height: 'auto' 
                }} 
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
              <Chip 
                label={product.price}
                color="success"
                sx={{ mb: 2 }}
              />
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductDetail;