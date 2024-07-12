import axios from "axios";
import { ADD_CAT, REMOVE_CAT, SET_CATS, UPDATE_CAT } from "../actionTypes";

const CATS_URL = "http://localhost:8001/cats/";

export function fetchCats() {
  return async (dispatch) => {
    try {
      const res = await axios.get(CATS_URL);
      dispatch({ type: SET_CATS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addCat(newCat) {
  return async (dispatch) => {
    try {
      const res = await axios.post(CATS_URL, newCat);
      dispatch({ type: ADD_CAT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeCat(id) {
  return async (dispatch) => {
    try {
      const res = await axios.delete(CATS_URL + id);
      dispatch({ type: REMOVE_CAT, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateCat(id, values) {
  return async (dispatch) => {
    try {
      const res = await axios.patch(CATS_URL + id, values);
      dispatch({ type: UPDATE_CAT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}
