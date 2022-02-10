import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box, Button, Typography } from "@mui/material";
import { removeProductFromCart } from "../../actions/productActions";
import useStyles from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
const Cart = () => {
  // get Cart from State
  const cart = useSelector((state) => state.cart.cart);

  // get CSS classes
  const classes = useStyles();

  const dispatch = useDispatch();

  // function for removing product from Cart
  const removeFromCart = (product) => {
    dispatch(removeProductFromCart(product));
  };

  if (cart.length === 0) {
    return (
      <Container sx={{ padding: "20px" }}>
        <Typography variant="h5">There are currently no products in cart.</Typography>
      </Container>
    );
  } else {
    return (
      <Container
        sx={{ padding: "20px", paddingLeft: { md: "150px" }, paddingRight: { md: "150px" } }}
      >
        {cart.map((cartItem) => (
          <Box
            sx={{
              display: "flex",
              border: "2px solid black",
              padding: "10px 15px 5px 10px ",
              marginBottom: "20px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            key={cartItem.itemId}
          >
            <img className={classes.img} src={cartItem.picture} alt={cartItem.displayName} />
            <Box sx={{ padding: "10px 20px", maxWidth: "400px" }}>
              <Typography variant="h5" gutterBottom>
                {cartItem.displayName}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ marginRight: "5px" }} gutterBottom variant="h6" component="div">
                  {cartItem.currentPrice} €
                </Typography>
                {cartItem.originalPrice > cartItem.currentPrice && (
                  <Typography
                    sx={{ textDecoration: "line-through", color: "#817f7f" }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {cartItem.originalPrice} €
                  </Typography>
                )}
              </Box>
            </Box>
            <Button
              onClick={() => removeFromCart(cartItem)}
              sx={{ width: "100px", marginLeft: "auto", borderColor: "#bf5b54", color: "#bf5b54" }}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Box>
        ))}
      </Container>
    );
  }
};

export default Cart;
