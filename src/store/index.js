import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter.reducer";

const rootReducer = combineReducers({ counterModule: counterReducer });

const store = createStore(rootReducer);

// This is for debugging purposes.
// make sure to remove this in production ❗
window.gStore = store;

export default store;
