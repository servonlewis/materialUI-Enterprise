import types from "../Actions/Types";

const defaultState = { theme: "dark" };

const sideNavLeftReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.LEFTTHEME:
      return {
        ...state,
        theme: action.data.color
      }; // end return
    default:
      return { ...state };
  } // end switch
}; // end reducer

export default sideNavLeftReducer;
