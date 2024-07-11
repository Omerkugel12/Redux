import { SET_LANG, SET_THEME } from "../actionTypes";

export function setTheme(theme) {
  return { type: SET_THEME, payload: theme };
}

export function setLang(lang) {
  return { type: SET_LANG, payload: lang };
}
