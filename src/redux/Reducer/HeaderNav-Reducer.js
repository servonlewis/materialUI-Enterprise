import types from "../Actions/Types";

const defaultState = {
  theme: "light",
  mobileModal: false,
  mobileLeftMenu: "hidden",
  mobileAvatarMenu: false,
  mobileTabSelect: "Dashboard"
};

const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.HEADERTHEME:
      return {
        ...state,
        theme: action.data
      }; // end return

    case types.MOBILEMODAL:
      return {
        ...state,
        mobileModal: action.data
      }; // end return

    case types.MOBILELEFTMENU:
      return {
        ...state,
        mobileLeftMenu: action.data
      }; // end return

    case types.MOBILEAVATARMENU:
      return {
        ...state,
        mobileAvatarMenu: action.data
      }; // end return
    case types.MOBILETABBARSELECT:
      return {
        ...state,
        mobileTabSelect: action.data
      }; // end return
    default:
      return { ...state };
  } // end switch
}; // end reducer

export default headerReducer;
