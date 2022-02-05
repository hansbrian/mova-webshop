import React from 'react';

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

const CollectionList = () => {
  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection.collectionId}>{collection.displayName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionList;
