import { ActionTypes } from '../constants/action-types';
const initialState = {
  categories: [],
};
const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export default categoryReducer;
