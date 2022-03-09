import { dispatch } from "../store";
import { ADD_DETAIL, SET_CATEGORIES, SET_ERROR, SET_LOADING } from "../types";

export const setCategories = (data) => {
  dispatch({ type: SET_CATEGORIES, payload: data });
};

export const setLoading = (data) => {
  dispatch({ type: SET_LOADING, payload: data });
};
export const setError = (data) => {
  dispatch({ type: SET_ERROR, payload: data });
};

export const addDetail = (data) => {
  dispatch({ type: ADD_DETAIL, payload: data });
};
