import React, { Fragment } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import WbIncandescent from "@material-ui/icons/WbIncandescent";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing.unit
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
});

const Header = ({
  classes,
  onDrawerToggle,
  navValue,
  getNavValue,
  swapTheme,
  ...other
}) => {
  return (
    <Fragment>
      <AppBar
        color="primary"
        position="sticky"
        elevation={0}
        className={classes.AppBar}
      >
        <Toolbar>
          <Grid container spacing={8} alignItems="center">
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Tooltip title="Go to some Api or something like that">
                <Typography className={classes.link} component="a" href="#">
                  Go to Link
                </Typography>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alters">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar
                  className={classes.avatar}
                  src="http://iphoto.nb.com/20006408.jpeg"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={8}>
            <Grid item xs>
              <Typography color="inherit" variant="h5">
                My Dashboard Name
              </Typography>
            </Grid>

            <Grid item>
              <Tooltip title="Toggle light or dark mode">
                <IconButton color="inherit" onClick={() => swapTheme()}>
                  <WbIncandescent />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs
          value={navValue}
          textColor="inherit"
          onChange={(e, v) => getNavValue(v)}
        >
          <Tab textColor="inherit" label="Users" />
          <Tab textColor="inherit" label="Groups" />
          <Tab textColor="inherit" label="Phishing Campaigns" />
        </Tabs>
      </AppBar>
    </Fragment>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
  navValue: PropTypes.number.isRequired,
  getNavValue: PropTypes.func.isRequired,
  swapTheme: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
