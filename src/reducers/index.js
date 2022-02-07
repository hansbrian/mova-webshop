import { combineReducers } from 'redux';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import collectionReducer from './collectionReducer';

const allReducers = combineReducers({
  allProducts: productReducer,
  allCategories: categoryReducer,
  allCollections: collectionReducer,
});

export default allReducers;
