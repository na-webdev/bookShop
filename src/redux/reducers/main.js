import { setLoading } from "../actions/categoryActions";
import { ADD_DETAIL, SET_CATEGORIES, SET_ERROR, SET_LOADING } from "../types";

const initialState = {
  categories: [],
  categoryDetails: {},
  loading: true,
  error: undefined,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_CATEGORIES:
      console.log("categories", action.payload);
      return { ...state, categories: action.payload };
    case ADD_DETAIL:
      return {
        ...state,
        categoryDetails: {
          ...state["categoryDetails"],
          [action.payload.urlEncode]: action.payload.detail,
        },
      };
    default:
      return state;
  }
};

export default categoriesReducer;
