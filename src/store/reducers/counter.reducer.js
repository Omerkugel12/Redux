import { DECREMENT, INCREMENT } from "../actionTypes";

const INITIAL_STATE = {
  count: 0,
};

function counterReducer(state = INITIAL_STATE, action) {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
