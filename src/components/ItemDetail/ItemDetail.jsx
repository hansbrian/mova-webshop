import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectedProduct,
  removeSelectedProduct,
  addProductToCart,
  removeProductFromCart,
} from '../../actions/productActions';
import axios from 'axios';
import { Box, Button, Chip, Typography } from '@mui/material';
import useStyles from './styles';

const ItemDetail = () => {
  // Get product from state
  const product = useSelector((state) => state.product);

  //Get Cart from state to check if product is in cart
  const cart = useSelector((state) => state.cart.cart);

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

  const addToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  // function for removing product from Cart
  const removeFromCart = (product) => {
    dispatch(removeProductFromCart(product));
  };

  useEffect(() => {
    if (itemId && itemId !== '') fetchProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [itemId]);

  let button;
  console.log(cart);
  console.log(product);
  if (cart.some((cartItem) => cartItem.itemId === product.itemId)) {
    button = (
      <Button
        onClick={() => removeFromCart(product)}
        sx={{ color: '#bf5b54', borderColor: '#bf5b54' }}
        variant="outlined"
      >
        {' '}
        Remove From Cart
      </Button>
    );
  } else {
    button = (
      <Button
        onClick={() => addToCart(product)}
        sx={{ color: 'black', borderColor: 'black' }}
        variant="outlined"
      >
        {' '}
        Add to Cart
      </Button>
    );
  }

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
          justifyContent: 'center',
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
              <Typography sx={{ marginRight: '5px' }} variant="h6">
                {product.currentPrice} €
              </Typography>
              {product.originalPrice > product.currentPrice && (
                <Typography
                  sx={{ textDecoration: 'line-through', color: '#817f7f' }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {product.originalPrice} €
                </Typography>
              )}
            </Box>
            {button}
          </Box>
        </Box>
      </Box>
    );
  }
};

export default ItemDetail;
