import types from "../Actions/Types";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

export const collapseMe = collapsed => {
  return { type: types.COLLAPSED, data: { collapsed } };
}; // end Sample
