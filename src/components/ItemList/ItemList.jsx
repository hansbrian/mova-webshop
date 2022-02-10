import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setProducts } from "../../actions/productActions";
import Item from "./Item";
import { Container, Typography } from "@mui/material";

const url = "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?";

const ItemList = () => {
  // get params ID from URL
  const { categoryId, collectionId } = useParams();

  // get all products from state
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // set id and type depending if its a category or collection
  const id = categoryId ? categoryId : collectionId;
  let type = null;
  if (categoryId) {
    type = "category";
  } else if (collectionId) {
    type = "collection";
  }

  // build the URL for HTTP request
  const endpoint = url + type + "=" + id;

  // Get products from server and dispatch action
  const fetchProducts = async () => {
    const res = await axios.get(endpoint).catch((err) => {
      console.log("Error: ", err);
    });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return (
      <Container sx={{ padding: "20px" }}>
        <Typography variant="h5">No Products in this {type}.</Typography>
      </Container>
    );
  } else {
    return (
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr 1fr", sm: "1fr 1fr", xs: "1fr" },
          gridGap: { md: "40px", sm: "20px", xs: "20px" },
          marginTop: "50px",
        }}
      >
        {products.map((product) => (
          <Item key={product.itemId} product={product} />
        ))}
      </Container>
    );
  }
};

export default ItemList;
