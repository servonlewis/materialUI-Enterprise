import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import blue from "@material-ui/core/colors/blue";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";
import SelectLight from "../../node_modules/react-select/dist/react-select";
import SelectDark from "../../node_modules/react-select/dist/react-select2";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import classNames from "classnames";
import suggestions from "./AutoComplete";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
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
  },
  margin: {
    margin: theme.spacing.unit * 0.5
  },
  fab: {
    margin: theme.spacing.unit
  },
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    zIndex: 56,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-1em"
    }
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "relative",
    left: 2,
    fontSize: 16
  },
  divider: {
    height: theme.spacing.unit * 2
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  roots: {
    flexGrow: 1
  }
});

const NoOptionsMessage = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.noOptionsMessage}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const inputComponent = ({ inputRef, ...props }) => (
  <div ref={inputRef} {...props} />
);

const Control = props => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children,
        endAdornment: (
          <InputAdornment position="end">
            {" "}
            <SearchIcon />
          </InputAdornment>
        ),
        ...props.innerProps
      }
    }}
    {...props.selectProps.textFieldProps}
  />
);

const Option = props => (
  <MenuItem
    buttonRef={props.innerRef}
    selected={props.isFocused}
    component="div"
    style={{
      fontWeight: props.isSelected ? 500 : 400
    }}
    {...props.innerProps}
  >
    {props.children}
  </MenuItem>
);

const Placeholder = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.placeholder}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const SingleValue = props => (
  <Typography
    className={props.selectProps.classes.singleValue}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const ValueContainer = props => (
  <div className={props.selectProps.classes.valueContainer}>
    <SearchIcon fontSizeSmall />
    {props.children}
  </div>
);

const MultiValue = props => (
  <Chip
    tabIndex={-1}
    label={props.children}
    className={classNames(props.selectProps.classes.chip, {
      [props.selectProps.classes.chipFocused]: props.isFocused
    })}
    onDelete={props.removeProps.onClick}
    deleteIcon={<CancelIcon {...props.removeProps} />}
  />
);

const MenuSelect = props => (
  <Paper
    square
    className={props.selectProps.classes.paper}
    {...props.innerProps}
  >
    {props.children}
  </Paper>
);

const components = {
  Control,
  MenuSelect,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">
          {" "}
          <Avatar
            className={classes.avatar}
            src={require("../public/images/servon-opp-summit.jpg")}
            sizes="lg"
          />
        </DialogTitle>
        <DialogTitle id="simple-dialog-title">
          <Typography variant="h6">Account Settings</Typography>
        </DialogTitle>
        <div>
          <List>
            <ListItem
              button
              onClick={() => {
                return this.handleListItemClick(this);
              }}
              key={0}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Do Something" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class Header extends PureComponent {
  state = {
    open: false,
    selectedValue: null,
    anchorEl: null,

    single: null,
    multi: null
  };

  handleChange = value => {
    if (value !== null || "") {
      return (window.location = value.route);
    }
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, onDrawerToggle, swapTheme, themeColor } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const url = window.location.pathname;
    const currentUrl = url.substr(url.lastIndexOf("/") + 1);
    const Select = themeColor === "dark" ? SelectDark : SelectLight;
    const selectStyles = {
      input: base => ({
        ...base,
        color: themeColor === "dark" && "#fff",
        "& input": {
          font: "inherit"
        }
      })
    };
    return (
      <Fragment>
        <AppBar
          color="default"
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
              <Grid item sm>
                <Hidden smDown>
                  <Typography color="inherit" variant="h5">
                    Infrastructure Reporting Portal
                  </Typography>
                </Hidden>
              </Grid>
              <Grid item xs />
              <Grid item>
                <Tooltip title="Toggle light or dark mode">
                  <IconButton color="inherit" onClick={() => swapTheme()}>
                    <InvertColorsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Mail • 5 new Messages">
                  <IconButton color="inherit">
                    <Badge
                      className={classes.margin}
                      badgeContent={5}
                      color="secondary"
                    >
                      <MailIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Alerts • 3 alters">
                  <IconButton color="inherit">
                    <Badge
                      className={classes.margin}
                      badgeContent={3}
                      color="error"
                    >
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <IconButton
                  color="inherit"
                  className={classes.iconButtonAvatar}
                  onClick={this.handleClickOpen}
                >
                  <Avatar
                    className={classes.avatar}
                    src={require("../public/images/servon-opp-summit.jpg")}
                  />
                </IconButton>
                <SimpleDialogWrapped
                  selectedValue={this.state.selectedValue}
                  open={this.state.open}
                  onClose={this.handleClose}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component="div"
          className={classes.secondaryBar}
          color="inherit"
          position="static"
          elevation={1}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={8}>
              <Grid container sm>
                <Hidden mdUp>
                  <Grid xs />
                </Hidden>
                <Button
                  color="default"
                  aria-owns={open ? "External-Links" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenuClick}
                >
                  External Links
                </Button>

                <Button
                  color="default"
                  component={Link}
                  to="/AdminPortal"
                  className={
                    currentUrl.toLowerCase() === "AdminPortal".toLowerCase() &&
                    classes.itemActiveItem
                  }
                >
                  Admin Portal
                </Button>
                <Menu
                  id="External-Links"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={this.handleMenuClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem
                    onClick={this.handleMenuClose}
                    component={"a"}
                    href="https://nb.service-now.com/nav_to.do?uri=%2Fhome.do%3F"
                  >
                    Service Now
                  </MenuItem>
                  <MenuItem
                    onClick={this.handleMenuClose}
                    component={"a"}
                    href="http://eisportal.nb.com/"
                  >
                    Eis Portal
                  </MenuItem>
                  <MenuItem
                    onClick={this.handleMenuClose}
                    component={"a"}
                    href="http://dms.nb.com"
                  >
                    Desktop Management System
                  </MenuItem>
                </Menu>
              </Grid>
              <Grid item xs />
              <Grid container sm>
                <div className={classes.grow} />
                <div className={classNames(classes.search, classes.roots)}>
                  <div className={classes.searchIcon} />
                  <Select
                    classes={classes}
                    styles={selectStyles}
                    options={suggestions}
                    components={components}
                    value={this.state.single}
                    onChange={this.handleChange}
                    placeholder="Search"
                    isClearable
                    textFieldProps={
                      {
                        /*     label: "Label",
                      InputLabelProps: {
                        shrink: true
                      } */
                      }
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
  navValue: PropTypes.number.isRequired,
  getNavValue: PropTypes.func.isRequired,
  swapTheme: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
