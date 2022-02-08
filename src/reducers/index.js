import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import categoryReducer from './categoryReducer';
import collectionReducer from './collectionReducer';

const allReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  allCategories: categoryReducer,
  allCollections: collectionReducer,
});

export default allReducers;
