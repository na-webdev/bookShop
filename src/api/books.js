import axios from "axios";
import {
  addDetail,
  setCategories,
  setError,
  setLoading,
} from "../redux/actions/categoryActions";
import { SET_ERROR } from "../redux/types";

export const getCategories = async () => {
  try {
    const res = await axios.get(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=x4M1ABQlGTyiXS5jlbtbruSDNkyGGIAq"
    );
    const readyData = res.data.results;
    setCategories(readyData);

    setLoading(false);
    return { success: true, data: res.data };
  } catch (error) {
    setError(true);
    return { success: false };
  }
};

export const getDetail = async (url) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/${url}.json?api-key=x4M1ABQlGTyiXS5jlbtbruSDNkyGGIAq`
    );
    const readyData = res.data.results;
    addDetail({ urlEncode: url, detail: readyData });

    return { success: true, data: readyData };
  } catch (error) {
    setError(true);
    return { success: false };
  }
};
