import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import { Container, Typography } from '@mui/material';
const categories = [
  {
    displayName: 'Dresses',
    parentId: 'ladies',
    categoryId: 'dresses',
  },
  {
    displayName: 'Bottoms',
    parentId: 'men',
    categoryId: 'bottoms',
  },
  {
    displayName: 'Men',
    parentId: 'root',
    categoryId: 'men',
  },
  {
    displayName: 'Shoes',
    parentId: 'men',
    categoryId: 'shoes',
  },
  {
    displayName: 'Hoodies',
    parentId: 'mens',
    categoryId: 'hoodies',
  },
  {
    displayName: 'Shorts',
    parentId: 'bottoms',
    categoryId: 'shorts',
  },
  {
    displayName: 'Ladies',
    parentId: 'root',
    categoryId: 'ladies',
  },
];

const collections = [
  {
    collectionId: 'winter2020',
    displayName: 'Winter 2020',
  },
  {
    collectionId: 'sports',
    displayName: 'Extreme Sports',
  },
  {
    collectionId: 'summer2020',
    displayName: 'Summer 2020',
  },
];

const Home = () => {
  return (
    <Container
      sx={{
        padding: { xs: '14px', md: '24px ', lg: '24px 100px' },
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      <Box>
        <Typography variant="h2" gutterBottom>
          Categories:
        </Typography>
        <Box sx={{ width: '100%', minWidth: 400, border: 'black 2px solid', marginBottom: '28px' }}>
          <List sx={{ padding: '0' }}>
            {categories.map((category) => (
              <div key={category.categoryId}>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ padding: '14px 28px' }}
                    component="a"
                    href={'/category/' + category.categoryId}
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
        <Box sx={{ width: '100%', minWidth: 400, border: 'black 2px solid' }}>
          <List>
            {collections.map((collection) => (
              <div key={collection.categoryId}>
                <ListItem key={collection.collectionId} disablePadding>
                  <ListItemButton
                    sx={{ padding: '14px 28px' }}
                    component="a"
                    href={'/collection/' + collection.collectionId}
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
