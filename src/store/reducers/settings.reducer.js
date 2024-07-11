import { SET_LANG, SET_THEME } from "../actionTypes";

const INITIAL_STATE = {
  theme: "light",
  lang: "en",
};

function settingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}

export default settingsReducer;
