import types from "../Actions/Types";

const defaultState = {
  theme: false
};

const sideNavRightReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.RIGHTACTION:
      return {
        ...state,
        theme: action.data
      }; // end return

    default:
      return { ...state };
  } // end switch
}; // end reducer

export default sideNavRightReducer;
