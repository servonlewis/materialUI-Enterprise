import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const styles = theme => ({
  Breadcrumbs: {
    fontWeight: "bold"
  },
  icon: {
    marginRight: theme.spacing.unit / 2,
    width: 20,
    height: 20
  },
  link: {
    display: "flex"
  }
});

class Content extends PureComponent {
  handleClick = event => {
    event.preventDefault();
    console.log("You clicked a breadcrumb.");
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div style={{ marginTop: -20 }} />
        <Grid container>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            arial-label="Breadcrumb"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography
              color="default"
              variant="subtitle1"
              className={classes.Breadcrumbs}
            >
              Modeling Scorecard
            </Typography>
          </Breadcrumbs>
        </Grid>
        <div style={{ marginTop: 20 }} />
        <StyledSplash />
      </Fragment>
    );
  }
}

class Splash extends PureComponent {
  state = {};

  componentDidMount() {
    this.setState({
      options: {
        filterType: "checkbox",
        responsive: "scroll",
        print: false,
        rowsPerPage: 25,
        rowsPerPageOptions: [10, 25, 50, 100],
        downloadOptions: { filename: "NoBe4_Users.csv" }
      }
    });
  }

  render() {
    const { classes } = this.props;

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
      </Fragment>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  navValue: PropTypes.number.isRequired,
  getNavValue: PropTypes.func.isRequired
};

const StyledSplash = withStyles(styles)(Splash);

export default withStyles(styles)(Content);
