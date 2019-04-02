import types from "../Actions/Types";

const defaultState = { mobileOpen: false, navValue: 0 };

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.COLLAPSED:
      return {
        ...state,
        mobileOpen: action.data.collapsed
      }; // end return

    case types.NAV_VALUE:
      return {
        ...state,
        navValue: action.value
      }; // end return

    case types.SET_ALL_USERS:
      return {
        ...state,
        AllUsers: action.AllUsers,
        allUserData: action.allUserData
      }; // end return
    default:
      return { ...state };
  } // end switch
}; // end reducer

export default appReducer;
