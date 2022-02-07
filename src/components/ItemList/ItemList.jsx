import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setProducts } from '../../actions/productActions';
/* import { selectedCollection } from '../../actions/collectionActions';
import { selectedCategory } from '../../actions/categoryActions'; */
const url = 'https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?';

const ItemList = () => {
  const { categoryId, collectionId } = useParams();
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const id = categoryId ? categoryId : collectionId;
  let type = null;
  if (categoryId) {
    type = 'category';
  } else if (collectionId) {
    type = 'collection';
  }
  const endpoint = url + type + '=' + id;
  const fetchProducts = async () => {
    const res = await axios.get(endpoint).catch((err) => {
      console.log('Error: ', err);
    });
    dispatch(setProducts(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <div>No Products</div>;
  } else {
    return <div>{products[0].displayName}</div>;
  }
};

export default ItemList;
