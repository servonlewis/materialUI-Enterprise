import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import appReducer from "./App-Reducer";
import contentReducer from "./Content-Reducer";
import headerNav from "./HeaderNav-Reducer";
import sideNavLeft from "./SideNavLeft-Reducer";
import sideNavRight from "./SideNavRight-Reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    appReducer,
    contentReducer,
    headerNav,
    sideNavLeft,
    sideNavRight
  });
