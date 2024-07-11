import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({ counterModule: combineReducers });

const store = createStore(rootReducer);

// This is for debugging purposes.
// make sure to remove this in production ❗
window.gStore = store;

export default store;
