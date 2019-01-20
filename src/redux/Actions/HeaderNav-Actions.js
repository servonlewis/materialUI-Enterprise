import types from "../Actions/Types";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
export const theme = data => ({
  type: types.HEADERTHEME,
  data
});

export const mobileModal = data => ({
  type: types.MOBILEMODAL,
  data
});

export const mobileLeftMenu = data => ({
  type: types.MOBILELEFTMENU,
  data
});

export const mobileAvatarMenu = data => ({
  type: types.MOBILEAVATARMENU,
  data
});

export const mobileTabBarSelect = data => ({
  type: types.MOBILETABBARSELECT,
  data
});
