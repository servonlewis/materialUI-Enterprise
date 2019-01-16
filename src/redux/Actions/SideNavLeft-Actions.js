import types from "../Actions/Types";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
export const theme = data => ({
  type: types.LEFTTHEME,
  data
}); // end Sample
