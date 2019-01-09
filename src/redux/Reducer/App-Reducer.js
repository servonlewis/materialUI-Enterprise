import types from "../Actions/Types";

const defaultState = {
  collapsed: false,
  event: "",
  config: {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"]
  },
  endpoint: "IPADDRESS:4000"
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.COLLAPSED:
      return { ...state, collapsed: action.data.collapsed }; // end return
    case types.SOMEDISPATCH:
      return { ...state, data: action.data.event };
    default:
      return { ...state };
  } // end switch
}; // end reducer

export default appReducer;
