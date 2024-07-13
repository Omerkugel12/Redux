import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter.reducer";
import settingsReducer from "./reducers/settings.reducer";
import catsReducer from "./reducers/cats.reducer";
import { thunk } from "redux-thunk";
import { carsReducer } from "./reducers/cars.reducer";

const rootReducer = combineReducers({
  counterModule: counterReducer,
  settingsModule: settingsReducer,
  catsModule: catsReducer,
  carsModule: carsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// This is for debugging purposes.
// make sure to remove this in production ❗
window.gStore = store;

export default store;
