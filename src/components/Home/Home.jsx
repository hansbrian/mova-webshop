import React, { useEffect } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { setCategories } from "../../actions/categoryActions";
import { setCollections } from "../../actions/collectionActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const categoriesEndpoint = "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/categories";
const collectionsEndpoint =
  "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/collections";

const Home = () => {
  // get categories and collections from state
  const categories = useSelector((state) => state.allCategories.categories);
  const collections = useSelector((state) => state.allCollections.collections);
  const dispatch = useDispatch();

  // get categories from server and dispatch action to set the categories
  const fetchCategories = async () => {
    const res = await axios.get(categoriesEndpoint).catch((err) => {
      console.log("Error: ", err);
    });
    dispatch(setCategories(res.data));
  };

  // get collections from server and dispatch action to set the collections
  const fetchCollections = async () => {
    const res = await axios.get(collectionsEndpoint).catch((err) => {
      console.log("Error: ", err);
    });
    dispatch(setCollections(res.data));
  };

  useEffect(() => {
    fetchCategories();
    fetchCollections();
  }, []);

  return (
    <Container
      sx={{
        padding: { xs: "14px", md: "24px ", lg: "24px 100px" },
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Typography variant="h2" gutterBottom>
          Categories:
        </Typography>
        <Box sx={{ width: "100%", minWidth: 400, border: "black 2px solid", marginBottom: "28px" }}>
          <List sx={{ padding: "0" }}>
            {categories.map((category) => (
              <div key={category.categoryId}>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ padding: "14px 28px" }}
                    component="a"
                    href={"/category/" + category.categoryId}
                  >
                    <ListItemText primary={category.displayName} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </Box>
      <Box>
        <Typography variant="h2" gutterBottom>
          Collections:
        </Typography>
        <Box sx={{ width: "100%", minWidth: 400, border: "black 2px solid" }}>
          <List sx={{ padding: "0" }}>
            {collections.map((collection) => (
              <div key={collection.collectionId}>
                <ListItem key={collection.collectionId} disablePadding>
                  <ListItemButton
                    sx={{ padding: "14px 28px" }}
                    component="a"
                    href={"/collection/" + collection.collectionId}
                  >
                    <ListItemText primary={collection.displayName} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
