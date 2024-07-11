import { CHANGE_COUNTER_NAME, DECREMENT, INCREMENT } from "../actionTypes";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function changeCounterName(name) {
  return { type: CHANGE_COUNTER_NAME, payload: name };
}
