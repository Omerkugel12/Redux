import axios from "axios";
import { SET_CARS } from "../actionTypes";

const CARS_URL = "http://localhost:8001/cars/";

export function getCars() {
  return async (dispatch) => {
    try {
      const res = await axios.get(CARS_URL);
      dispatch({ type: SET_CARS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}
