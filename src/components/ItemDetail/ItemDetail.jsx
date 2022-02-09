import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../../actions/productActions';
import axios from 'axios';
import { Box, Button, Chip, Typography } from '@mui/material';
import useStyles from './styles';

const ItemDetail = () => {
  // Get product from state
  const product = useSelector((state) => state.product);

  // get CSS classes
  const classes = useStyles();

  //get product Id from URL Parameter
  const { itemId } = useParams();

  const dispatch = useDispatch();

  // Endpoint to fetch item data
  const endpoint = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items/${itemId}`;

  // Get Product info from server
  const fetchProduct = async () => {
    const res = await axios.get(endpoint).catch((err) => {
      console.log('Error: ', err);
    });
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (itemId && itemId !== '') fetchProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [itemId]);

  if (Object.keys(product).length === 0) {
    return <Typography variant="h3">No Product found </Typography>;
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          marginTop: '5px',
          margin: { xs: '5px 30px' },
        }}
      >
        <img className={classes.img} src={product.picture} alt={product.displayName} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '10px',
          }}
        >
          <Typography variant="h3" gutterBottom>
            {product.displayName}
          </Typography>
          <Typography gutterBottom>{product.description}</Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ marginRight: '10px' }}>Avaliable Sizes: </Typography>
            {product.availableSizes?.map((size) => (
              <Chip key={size} label={size} />
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
            <Box sx={{ display: 'flex' }}>
              {product.originalPrice > product.currentPrice && (
                <Typography
                  sx={{ textDecoration: 'line-through', color: '#817f7f', marginRight: '5px' }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {product.originalPrice} €
                </Typography>
              )}
              <Typography variant="h6">{product.currentPrice} €</Typography>
            </Box>
            <Button sx={{ color: 'black', borderColor: 'black' }} variant="outlined">
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default ItemDetail;
