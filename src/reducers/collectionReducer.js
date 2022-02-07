import { ActionTypes } from '../constants/action-types';
const initialState = {
  collections: [],
};
const collectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COLLECTIONS:
      return { ...state, collections: payload };
    default:
      return state;
  }
};

export default collectionReducer;
