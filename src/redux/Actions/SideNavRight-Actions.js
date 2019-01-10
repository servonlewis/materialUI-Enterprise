import types from "../Actions/Types";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
export const theme = data => {
  const color = data === true ? "light" : "dark";
  return {
    type: types.RIGHTTHEME,
    data: {
      color
    }
  };
}; // end Sample
