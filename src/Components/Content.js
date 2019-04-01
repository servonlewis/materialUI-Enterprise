import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import MUIDataTable from "mui-datatables";
import Input from "@material-ui/core/Input";
import { allUserColumns } from "../constants/tableData";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";
const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
  },
  searchBar: {
    //  borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: "block"
  },
  addUser: {
    marginRight: theme.spacing.unit
  },
  contentWrapper: {
    //margin: "40px 16px"
  },
  paperTest: {
    marginTop: 15,
    minHeight: 200
  },

  tableDiv: {
    marginTop: 15,
    overflow: "auto"
  }
});

class Content extends PureComponent {
  render() {
    const { classes, navValue, getNavValue, AllUsers } = this.props;
    return (
      <Fragment>
        <Grid>
          <Paper className={classes.paper}>
            <AppBar
              className={classes.searchBar}
              position="static"
              color="default"
              elevation={0}
            >
              <Toolbar>
                <Grid container spacing={16} alignItems="center">
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Search by some sort of search"
                      InputProps={{
                        disableUnderline: false,
                        className: classes.searchInput
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Tooltip title="Search">
                      <Fab color="secondary" aria-label="search" size="small">
                        <SearchIcon className={classes.block} color="inherit" />
                      </Fab>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon
                          className={classes.block}
                          color="inherit"
                        />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </Paper>
        </Grid>
        {navValue === 0 ? <StyledUserSplash {...this.props} /> : null}
      </Fragment>
    );
  }
}

const UserSplash = ({ classes, AllUsers }) => {
  const allUserData =
    AllUsers &&
    AllUsers.map(x => ({
      id: x.id,
      employee_number: x.employee_number,
      first_name: x.first_name,
      last_name: x.last_name,
      job_title: x.job_title,
      email: x.email,
      phish_prone_percentage: x.phish_prone_percentage,
      phone_number: x.phone_number,
      extension: x.extension,
      mobile_phone_number: x.mobile_phone_number,
      location: x.location,
      division: x.division,
      manager_name: x.manager_name,
      manager_email: x.manager_email,
      groups: x.groups,
      adi_manageable: x.adi_manageable,
      joined_on: x.joined_on,
      last_sign_in: x.last_sign_in,
      status: x.status,
      employee_start_date: x.employee_start_date,
      archived_at: x.archived_at,
      custom_field_1: x.custom_field_1,
      custom_field_2: x.custom_field_2
    }));

  const options = {
    filterType: "checkbox",
    responsive: "scroll",
    print: false,
    rowsPerPage: 25,
    rowsPerPageOptions: [10, 25, 50, 100],
    downloadOptions: { filename: "NoBe4_Users.csv" }
  };

  return (
    <Fragment>
      <Grid container spacing={16} justify="center">
        <Grid item xs={4}>
          <Paper className={classes.paperTest}>
            <Typography variant="headline">hello world 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperTest}>
            <Typography variant="headline">hello world 2</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        {AllUsers ? (
          <Grid container>
            <Paper className={classes.tableDiv}>
              <MUIDataTable
                title={"All Users"}
                data={allUserData}
                columns={allUserColumns}
                options={options}
              />
            </Paper>
          </Grid>
        ) : null}
      </Grid>
    </Fragment>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  navValue: PropTypes.number.isRequired,
  getNavValue: PropTypes.func.isRequired,
  AllUsers: PropTypes.arrayOf(PropTypes.object).isRequired
};

const StyledUserSplash = withStyles(styles)(UserSplash);

export default withStyles(styles)(Content);
