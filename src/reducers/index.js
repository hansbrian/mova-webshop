import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import categoryReducer from './categoryReducer';
import collectionReducer from './collectionReducer';
import { addToCartReducer } from './cartReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const productsPersistConfig = {
  key: 'allProducts',
  storage: storage,
  blacklist: ['products'],
};
const categoriesPersistConfig = {
  key: 'allCategories',
  storage: storage,
  blacklist: ['categories'],
};
const collectionsPersistConfig = {
  key: 'allCollections',
  storage: storage,
  blacklist: ['collections'],
};

const allReducers = combineReducers({
  allProducts: persistReducer(productsPersistConfig, productReducer),
  product: selectedProductReducer,
  allCategories: persistReducer(categoriesPersistConfig, categoryReducer),
  allCollections: persistReducer(collectionsPersistConfig, collectionReducer),
  cart: addToCartReducer,
});

export default allReducers;
