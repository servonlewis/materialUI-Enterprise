import types from "../Actions/Types";

const defaultState = {
  theme: "#f0f2f5"
};

const contentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CONTENTTHEME:
      return {
        ...state,
        theme: action.data
      }; // end return
    default:
      return { ...state };
  } // end switch
}; // end reducer

export default contentReducer;
