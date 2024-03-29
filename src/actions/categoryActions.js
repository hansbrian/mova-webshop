import { ActionTypes } from "../constants/action-types";
export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};

export const selectedCategory = (category) => {
  return {
    type: ActionTypes.SELECTED_CATEGORY,
    payload: category,
  };
};
