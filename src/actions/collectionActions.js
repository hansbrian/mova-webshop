import { ActionTypes } from "../constants/action-types";
export const setCollections = (collections) => {
  return {
    type: ActionTypes.SET_COLLECTIONS,
    payload: collections,
  };
};

export const selectedCollection = (collection) => {
  return {
    type: ActionTypes.SELECTED_COLLECTION,
    payload: collection,
  };
};
