import { ADD_CAT, REMOVE_CAT, SET_CATS, UPDATE_CAT } from "../actionTypes";

const INITIAL_CATS_STATE = {
  cats: [],
};

function catsReducer(state = INITIAL_CATS_STATE, action) {
  switch (action.type) {
    case SET_CATS:
      return { ...state, cats: action.payload };
    case ADD_CAT:
      return { ...state, cats: [...state.cats, action.payload] };
    case REMOVE_CAT:
      return {
        ...state,
        cats: state.cats.filter((cat) => cat.id !== action.payload),
      };
    case UPDATE_CAT:
      return {
        ...state,
        cats: state.cats.map((cat) =>
          cat.id === action.payload.id ? action.payload : cat
        ),
      };
    default:
      return state;
  }
}

export default catsReducer;
