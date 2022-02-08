import React from 'react';
import { Box, Card, CardActionArea, CardMedia, Typography, CardContent } from '@mui/material';

const Item = (props) => {
  const product = props.product;
  return (
    <Card sx={{ justifySelf: 'strech' }}>
      <CardActionArea>
        <CardMedia component="img" height="240" image={product.picture} alt={product.displayName} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.displayName}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ marginRight: '5px' }} gutterBottom variant="body1" component="div">
              {product.currentPrice} €
            </Typography>
            {product.originalPrice > product.currentPrice && (
              <Typography
                sx={{ textDecoration: 'line-through', color: '#817f7f' }}
                gutterBottom
                variant="body1"
                component="div"
              >
                {product.originalPrice} €
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
