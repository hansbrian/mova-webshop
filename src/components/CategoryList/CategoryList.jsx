import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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

const CategoryList = () => {
  return (
    <div>
      <h1>Categories:</h1>
      <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <List>
          {categories.map((category) => (
            <ListItem key={category.categoryId}>
              <ListItemButton component="a" href={'/category/' + category.categoryId}>
                <ListItemText primary={category.displayName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default CategoryList;
