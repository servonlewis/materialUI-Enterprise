import types from "../Actions/Types";

export const collapseMe = collapsed => {
  if (collapsed) {
    collapsed = false;
  } else {
    collapsed = true;
  }
  return { type: types.COLLAPSED, data: { collapsed } };
}; // end Sample

export const headerNavBarValueChange = value => ({
  type: types.NAV_VALUE,
  value
});
