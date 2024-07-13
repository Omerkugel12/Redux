import { ADD_CAR, SET_CARS } from "../actionTypes";

const INITIAL_CARS_STATE = {
  cars: [],
};

export function carsReducer(state = INITIAL_CARS_STATE, action) {
  switch (action.type) {
    case SET_CARS:
      return { ...state, cars: action.payload };
    case ADD_CAR:
      return { ...state, cars: [...state.cars, action.payload] };

    default:
      return state;
  }
}
