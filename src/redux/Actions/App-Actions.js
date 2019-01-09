import types from "../Actions/Types";

export const collapseMe = collapsed => {
  return { type: types.COLLAPSED, data: { collapsed } };
}; // end Sample

export const someDispatch = event => dispatch => {
  dispatch({
    type: types.SOMEDISPATCH,
    data: {
      event
    }
  });
};
