import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";
import "simplebar/dist/simplebar.min.css";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  ReportOff,
  Report,
  DesktopMac,
  Mouse,
  TrendingUp,
  Create,
  Save,
  FileCopy,
  Storage,
  Visibility,
  Security,
  People,
  NetworkWifi,
  Router,
  Settings,
  Public,
  ThumbUp,
  Search,
  Http,
  Cloud
} from "@material-ui/icons/";
const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: "rgba(255, 255, 255, 0.7)"
  },
  itemCategory: {
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: 16,
    paddingBottom: 16
  },
  firebase: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white
  },
  itemActionable: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
  itemPrimary: {
    color: "inherit",
    fontSize: theme.typography.fontSize,
    "&$textDense": {
      fontSize: theme.typography.fontSize
    }
  },
  divider: {
    marginTop: theme.spacing.unit * 2
  },
  simpleBar: {
    height: "100%"
  },
  whiteBackground: {
    backgroundColor: "#fff !important",
    height: "6.05em"
  },
  img: {
    padding: 0,
    height: 3
  }
});

class Navigator extends PureComponent {
  render() {
    const { classes, ...other } = this.props;
    const url = window.location.pathname;
    const currentUrl = url.substr(url.lastIndexOf("/") + 1);
    const categories = [
      {
        id: "Monitoring",
        children: [
          {
            id: "NB Disable",
            icon: <ReportOff />,
            route: "/Monitoring/NbDisable",
            active: currentUrl.toLowerCase() === "nbdisable" && true
          },
          {
            id: "Maintenance Disable",
            icon: <ReportOff />,
            route: "/Monitoring/MaintenanceDisable",
            active: currentUrl.toLowerCase() === "maintenancedisable" && true
          }
        ]
      },
      {
        id: "Reports",
        children: [
          {
            id: "Modeling Scorecard",
            icon: <Report />,
            route: "/Reports/ModelingScoreCard",
            active: currentUrl.toLowerCase() === "modelingscorecard" && true
          },
          {
            id: "DB Modeling Scorecard",
            icon: <Search />,
            route: "/Reports/DBModelingScoreCard",
            active:
              currentUrl.toLowerCase() ===
                "DBModelingScoreCard".toLowerCase() && true
          },
          {
            id: "Host Lookup",
            icon: <Settings />,
            route: "/Reports/HostLookup",
            active:
              currentUrl.toLowerCase() === "HostLookup".toLowerCase() && true
          },
          {
            id: "Global Relay",
            icon: <Public />,
            route: "/Reports/GlobalRelay",
            active:
              currentUrl.toLowerCase() === "GlobalRelay".toLowerCase() && true
          },
          {
            id: "Host Health",
            icon: <ThumbUp />,
            route: "/Reports/HostHealth",
            active:
              currentUrl.toLowerCase() === "HostHealth".toLowerCase() && true
          },
          {
            id: "Host Patching",
            icon: <Security />,
            route: "/Reports/HostPatching",
            active:
              currentUrl.toLowerCase() === "HostPatching".toLowerCase() && true
          },
          {
            id: "CI Orphans",
            icon: <Report />,
            route: "/Reports/CIOrphans",
            active:
              currentUrl.toLowerCase() === "CIOrphans".toLowerCase() && true
          }
        ]
      },
      {
        id: "Desktops",
        children: [
          {
            id: "Desktop Signoff",
            icon: <Create />,
            route: "/Desktops/DesktopSignoff",
            active:
              currentUrl.toLowerCase() === "DesktopSignoff".toLowerCase() &&
              true
          },
          {
            id: "Desktop Metrics",
            icon: <TrendingUp />,
            route: "/Desktops/DesktopMetrics",
            active:
              currentUrl.toLowerCase() === "DesktopMetrics".toLowerCase() &&
              true
          },
          {
            id: "Windows Software",
            icon: <Mouse />,
            route: "/Desktops/WindowsSoftware",
            active:
              currentUrl.toLowerCase() === "WindowsSoftware".toLowerCase() &&
              true
          }
        ]
      },
      {
        id: "Storage",
        children: [
          {
            id: "NetApp",
            icon: <FileCopy />,
            route: "/Storage/NetApp",
            active: currentUrl.toLowerCase() === "NetApp".toLowerCase() && true
          },
          {
            id: "NetBackup",
            icon: <Save />,
            route: "/Storage/NetBackup",
            active:
              currentUrl.toLowerCase() === "NetBackup".toLowerCase() && true
          },
          {
            id: "VSP",
            icon: <Storage />,
            route: "/Storage/VSP",
            active: currentUrl.toLowerCase() === "VSP".toLowerCase() && true
          }
        ]
      },
      {
        id: "Security",
        children: [
          {
            id: "ATR Scoreboard",
            icon: <Security />,
            route: "/Security/ATRScoreCard",
            active:
              currentUrl.toLowerCase() === "ATRScoreCard".toLowerCase() && true
          },
          {
            id: "Patch compliance",
            icon: <Report />,
            route: "/Security/PatchCompliance",
            active:
              currentUrl.toLowerCase() === "PatchCompliance".toLowerCase() &&
              true
          },
          {
            id: "Account Access",
            icon: <People />,
            route: "/Security/AccountAccess",
            active:
              currentUrl.toLowerCase() === "AccountAccess".toLowerCase() && true
          },
          {
            id: "Assessment Tool",
            icon: <Security />,
            route: "/Security/AssessmentTool",
            active:
              currentUrl.toLowerCase() === "AssessmentTool".toLowerCase() &&
              true
          },
          {
            id: "Data Issues",
            icon: <Storage />,
            route: "/Security/DataIssues",
            active:
              currentUrl.toLowerCase() === "DataIssues".toLowerCase() && true
          },
          {
            id: "Secure Build Report",
            icon: <Report />,
            route: "/Security/SecureBuildReport",
            active:
              currentUrl.toLowerCase() === "SecureBuildReport".toLowerCase() &&
              true
          },
          {
            id: "Secure Config Report",
            icon: <Report />,
            route: "/Security/SecureConfigReport",
            active:
              currentUrl.toLowerCase() === "SecureConfigReport".toLowerCase() &&
              true
          },
          {
            id: "Splunk Health",
            icon: <Visibility />,
            route: "/Security/SplunkHealth",
            active:
              currentUrl.toLowerCase() === "SplunkHealth".toLowerCase() && true
          },
          {
            id: "Startup Commands",
            icon: <SettingsIcon />,
            route: "/Security/StartupCommands",
            active:
              currentUrl.toLowerCase() === "StartupCommands".toLowerCase() &&
              true
          },
          {
            id: "VRM Ticket Report",
            icon: <Report />,
            route: "/Security/VRMTicketReport",
            active:
              currentUrl.toLowerCase() === "VRMTicketReport".toLowerCase() &&
              true
          }
        ]
      },
      {
        id: "Network",
        children: [
          {
            id: "Employee Wireless",
            icon: <NetworkWifi />,
            route: "/Network/EmployeeWireless",
            active:
              currentUrl.toLowerCase() === "EmployeeWireless".toLowerCase() &&
              true
          },
          {
            id: "VLAN Report",
            icon: <Router />,
            route: "/Network/VLANReport",
            active:
              currentUrl.toLowerCase() === "VLANReport".toLowerCase() && true
          },
          {
            id: "F5 Pool Report",
            icon: <Http />,
            route: "/Network/F5PoolReport",
            active:
              currentUrl.toLowerCase() === "F5PoolReport".toLowerCase() && true
          },
          {
            id: "WAN Reporting",
            icon: <Cloud />,
            route: "/Network/WanReporting",
            active:
              currentUrl.toLowerCase() === "WanReporting".toLowerCase() && true
          }
        ]
      },
      {
        id: "Self Service",
        children: [
          {
            id: "Application Modeling",
            icon: <Create />,
            route: "/SelfService/ApplicationModeling",
            active:
              currentUrl.toLowerCase() ===
                "ApplicationModeling".toLowerCase() && true
          },
          {
            id: "DB Modeling",
            icon: <Create />,
            route: "/SelfService/DBModeling",
            active:
              currentUrl.toLowerCase() === "DBModeling".toLowerCase() && true
          },
          {
            id: "Patching Signoff",
            icon: <Create />,
            route: "/SelfService/PatchingSignoff",
            active:
              currentUrl.toLowerCase() === "PatchingSignoff".toLowerCase() &&
              true
          },
          {
            id: "DR Signoff",
            icon: <Create />,
            route: "/SelfService/DRSignoff",
            active:
              currentUrl.toLowerCase() === "DRSignoff".toLowerCase() && true
          },
          {
            id: "Signoff Forms",
            icon: <Create />,
            route: "/SelfService/SignoffForms",
            active:
              currentUrl.toLowerCase() === "SignoffForms".toLowerCase() && true
          }
        ]
      },
      {
        id: "Metrics",
        children: [
          {
            id: "Kpi",
            icon: <TrendingUp />,
            route: "/Metrics/Kpi",
            active: currentUrl.toLowerCase() === "Kpi".toLowerCase() && true
          }
        ]
      }
    ];

    return (
      <Drawer variant="permanent" {...other}>
        <SimpleBar
          className={classes.simpleBar}
          data-simplebar-auto-hide="true"
        >
          <List disablePadding>
            <ListItem
              button
              key="img"
              dense
              component={Link}
              to="/"
              className={classNames(
                classes.firebase,
                classes.item,
                classes.itemCategory,
                classes.whiteBackground
              )}
            >
              <div>
                <img
                  alt="Nb"
                  src={require("../public/images/myneuberger_logo.svg")}
                  width="100%"
                />{" "}
                <img
                  className={classes.img}
                  alt="Logo"
                  src={require("../public/images/linePic.png")}
                  width="100%"
                />
              </div>
            </ListItem>
            <ListItem
              key="home"
              button
              dense
              component={Link}
              to="/"
              className={classNames(classes.item, classes.itemCategory)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                className={classNames(
                  classes.item,
                  classes.itemActionable,
                  currentUrl === "" && classes.itemActiveItem
                )}
                classes={{
                  primary: classes.itemPrimary,
                  textDense: classes.textDense
                }}
              >
                Home
              </ListItemText>
            </ListItem>
            {categories.map(({ id, children }) => (
              <React.Fragment key={id}>
                <ListItem
                  className={classNames(
                    classes.item,
                    classes.itemActionable,
                    classes.itemActiveItem
                  )}
                >
                  <ListItemText
                    classes={{
                      primary: classes.categoryHeaderPrimary
                    }}
                  >
                    {id}
                  </ListItemText>
                </ListItem>
                {children.map(({ id: childId, icon, active, route }) => (
                  <ListItem
                    button
                    dense
                    component={Link}
                    to={route}
                    key={childId}
                    className={classNames(classes.item, classes.itemActionable)}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText
                      className={active && classes.itemActiveItem}
                      classes={{
                        primary: classes.itemPrimary,
                        textDense: classes.textDense
                      }}
                    >
                      {childId}
                    </ListItemText>
                  </ListItem>
                ))}
                <Divider className={classes.divider} />
              </React.Fragment>
            ))}
          </List>
        </SimpleBar>
      </Drawer>
    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);
