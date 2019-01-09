import types from "../Actions/Types";

const defaultState = { theme: "light" };

const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.HEADERTHEME:
      return {
        ...state,
        theme: action.data.color
      }; // end return

    default:
      return { ...state };
  } // end switch
}; // end reducer

export default headerReducer;
