import types from "../Actions/Types";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

export const theme = data => {
  return {
    type: types.RIGHTACTION,
    data: data ? false : data === false ? true : null
  };
}; // end Sample
