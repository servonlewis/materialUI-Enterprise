import "../Settings/Style";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import theme from "./theme";
import { isBrowser } from "react-device-detect";
const drawerWidth = 256;

export default {
  root: {
    display: "block",
    minHeight: "100vh"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appContent: {
    flex: 1,
    display: "flex",
    marginLeft: isBrowser && "256px",
    minHeight: "100vh",
    flexDirection: "column"
  },
  mainContent: {
    flex: 1,
    padding: "48px 36px 0",
    overflowX: "auto"
  }
};
