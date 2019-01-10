import types from "../Actions/Types";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
export const theme = data => {
  const color = data === true ? "dark" : "light";
  return {
    type: types.LEFTTHEME,
    data: {
      color
    }
  };
}; // end Sample
