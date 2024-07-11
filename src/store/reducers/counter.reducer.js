import { CHANGE_COUNTER_NAME, DECREMENT, INCREMENT } from "../actionTypes";

const INITIAL_STATE = {
  count: 0,
  name: "Omer",
};

function counterReducer(state = INITIAL_STATE, action) {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case CHANGE_COUNTER_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

export default counterReducer;
