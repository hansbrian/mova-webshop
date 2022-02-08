import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../../actions/productActions';
import axios from 'axios';

const ItemDetail = () => {
  const product = useSelector((state) => state.product);
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const endpoint = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items/${itemId}`;
  console.log(endpoint);
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
  return <div>{product.displayName}</div>;
};

export default ItemDetail;
