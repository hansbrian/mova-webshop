import React from 'react';
import { useParams } from 'react-router-dom';

const ItemList = () => {
  const { categoryId, collectionId } = useParams();
  const id = categoryId ? categoryId : collectionId;

  return <div>{id}</div>;
};

export default ItemList;
