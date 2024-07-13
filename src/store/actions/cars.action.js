import axios from "axios";
import { ADD_CAR, REMOVE_CAR, SET_CARS } from "../actionTypes";

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

export function addCar(newCar) {
  return async (dispatch) => {
    try {
      const res = await axios.post(CARS_URL, newCar);
      dispatch({ type: ADD_CAR, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteCar(carId) {
  return async (dispatch) => {
    try {
      const res = await axios.delete(CARS_URL + carId);
      dispatch({ type: REMOVE_CAR, payload: carId });
    } catch (error) {
      console.log(error);
    }
  };
}
