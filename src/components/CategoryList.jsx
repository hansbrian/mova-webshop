import React from 'react';

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
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.categoryId}>{category.displayName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
