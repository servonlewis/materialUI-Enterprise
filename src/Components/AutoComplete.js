import React, { PureComponent } from "react";
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

const url = window.location.pathname;
const currentUrl = url.substr(url.lastIndexOf("/") + 1);

export default [
  {
    label: "NB Disable",
    icon: <ReportOff />,
    route: "/Monitoring/NbDisable",
    active: currentUrl.toLowerCase() === "nbdisable" && true
  },
  {
    label: "Maintenance Disable",
    icon: <ReportOff />,
    route: "/Monitoring/MaintenanceDisable",
    active: currentUrl.toLowerCase() === "maintenancedisable" && true
  },

  {
    label: "Modeling Scorecard",
    icon: <Report />,
    route: "/Reports/ModelingScoreCard",
    active: currentUrl.toLowerCase() === "modelingscorecard" && true
  },
  {
    label: "DB Modeling Scorecard",
    icon: <Search />,
    route: "/Reports/DBModelingScoreCard",
    active:
      currentUrl.toLowerCase() === "DBModelingScoreCard".toLowerCase() && true
  },
  {
    label: "Host Lookup",
    icon: <Settings />,
    route: "/Reports/HostLookup",
    active: currentUrl.toLowerCase() === "HostLookup".toLowerCase() && true
  },
  {
    label: "Global Relay",
    icon: <Public />,
    route: "/Reports/GlobalRelay",
    active: currentUrl.toLowerCase() === "GlobalRelay".toLowerCase() && true
  },
  {
    label: "Host Health",
    icon: <ThumbUp />,
    route: "/Reports/HostHealth",
    active: currentUrl.toLowerCase() === "HostHealth".toLowerCase() && true
  },
  {
    label: "Host Patching",
    icon: <Security />,
    route: "/Reports/HostPatching",
    active: currentUrl.toLowerCase() === "HostPatching".toLowerCase() && true
  },
  {
    label: "CI Orphans",
    icon: <Report />,
    route: "/Reports/CIOrphans",
    active: currentUrl.toLowerCase() === "CIOrphans".toLowerCase() && true
  },
  {
    label: "Desktop Signoff",
    icon: <Create />,
    route: "/Desktops/DesktopSignoff",
    active: currentUrl.toLowerCase() === "DesktopSignoff".toLowerCase() && true
  },
  {
    label: "Desktop Metrics",
    icon: <TrendingUp />,
    route: "/Desktops/DesktopMetrics",
    active: currentUrl.toLowerCase() === "DesktopMetrics".toLowerCase() && true
  },
  {
    label: "Windows Software",
    icon: <Mouse />,
    route: "/Desktops/WindowsSoftware",
    active: currentUrl.toLowerCase() === "WindowsSoftware".toLowerCase() && true
  },
  {
    label: "NetApp",
    icon: <FileCopy />,
    route: "/Storage/NetApp",
    active: currentUrl.toLowerCase() === "NetApp".toLowerCase() && true
  },
  {
    label: "NetBackup",
    icon: <Save />,
    route: "/Storage/NetBackup",
    active: currentUrl.toLowerCase() === "NetBackup".toLowerCase() && true
  },
  {
    label: "VSP",
    icon: <Storage />,
    route: "/Storage/VSP",
    active: currentUrl.toLowerCase() === "VSP".toLowerCase() && true
  },
  {
    label: "ATR Scoreboard",
    icon: <Security />,
    route: "/Security/ATRScoreCard",
    active: currentUrl.toLowerCase() === "ATRScoreCard".toLowerCase() && true
  },
  {
    label: "Patch compliance",
    icon: <Report />,
    route: "/Security/PatchCompliance",
    active: currentUrl.toLowerCase() === "PatchCompliance".toLowerCase() && true
  },
  {
    label: "Account Access",
    icon: <People />,
    route: "/Security/AccountAccess",
    active: currentUrl.toLowerCase() === "AccountAccess".toLowerCase() && true
  },
  {
    label: "Assessment Tool",
    icon: <Security />,
    route: "/Security/AssessmentTool",
    active: currentUrl.toLowerCase() === "AssessmentTool".toLowerCase() && true
  },
  {
    label: "Data Issues",
    icon: <Storage />,
    route: "/Security/DataIssues",
    active: currentUrl.toLowerCase() === "DataIssues".toLowerCase() && true
  },
  {
    label: "Secure Build Report",
    icon: <Report />,
    route: "/Security/SecureBuildReport",
    active:
      currentUrl.toLowerCase() === "SecureBuildReport".toLowerCase() && true
  },
  {
    label: "Secure Config Report",
    icon: <Report />,
    route: "/Security/SecureConfigReport",
    active:
      currentUrl.toLowerCase() === "SecureConfigReport".toLowerCase() && true
  },
  {
    label: "Splunk Health",
    icon: <Visibility />,
    route: "/Security/SplunkHealth",
    active: currentUrl.toLowerCase() === "SplunkHealth".toLowerCase() && true
  },
  {
    label: "Startup Commands",
    icon: <SettingsIcon />,
    route: "/Security/StartupCommands",
    active: currentUrl.toLowerCase() === "StartupCommands".toLowerCase() && true
  },
  {
    label: "VRM Ticket Report",
    icon: <Report />,
    route: "/Security/VRMTicketReport",
    active: currentUrl.toLowerCase() === "VRMTicketReport".toLowerCase() && true
  },
  {
    label: "Employee Wireless",
    icon: <NetworkWifi />,
    route: "/Network/EmployeeWireless",
    active:
      currentUrl.toLowerCase() === "EmployeeWireless".toLowerCase() && true
  },
  {
    label: "VLAN Report",
    icon: <Router />,
    route: "/Network/VLANReport",
    active: currentUrl.toLowerCase() === "VLANReport".toLowerCase() && true
  },
  {
    label: "F5 Pool Report",
    icon: <Http />,
    route: "/Network/F5PoolReport",
    active: currentUrl.toLowerCase() === "F5PoolReport".toLowerCase() && true
  },
  {
    label: "WAN Reporting",
    icon: <Cloud />,
    route: "/Network/WanReporting",
    active: currentUrl.toLowerCase() === "WanReporting".toLowerCase() && true
  },
  {
    label: "Application Modeling",
    icon: <Create />,
    route: "/SelfService/ApplicationModeling",
    active:
      currentUrl.toLowerCase() === "ApplicationModeling".toLowerCase() && true
  },
  {
    label: "DB Modeling",
    icon: <Create />,
    route: "/SelfService/DBModeling",
    active: currentUrl.toLowerCase() === "DBModeling".toLowerCase() && true
  },
  {
    label: "Patching Signoff",
    icon: <Create />,
    route: "/SelfService/PatchingSignoff",
    active: currentUrl.toLowerCase() === "PatchingSignoff".toLowerCase() && true
  },
  {
    label: "DR Signoff",
    icon: <Create />,
    route: "/SelfService/DRSignoff",
    active: currentUrl.toLowerCase() === "DRSignoff".toLowerCase() && true
  },
  {
    label: "Signoff Forms",
    icon: <Create />,
    route: "/SelfService/SignoffForms",
    active: currentUrl.toLowerCase() === "SignoffForms".toLowerCase() && true
  },
  {
    label: "Kpi",
    icon: <TrendingUp />,
    route: "/Metrics/Kpi",
    active: currentUrl.toLowerCase() === "Kpi".toLowerCase() && true
  },
  {
    label: "Desktop Management System",
    icon: <DesktopMac />,
    route: "http://dms.nb.com",
    active:
      currentUrl.toLowerCase() === "http://dms.nb.com".toLowerCase() && true
  },
  {
    label: "EIS Portal",
    icon: <TrendingUp />,
    route: "http://eisportal.nb.com/Employee/InfoCard",
    active:
      currentUrl.toLowerCase() ===
        "http://eisportal.nb.com/Employee/InfoCard".toLowerCase() && true
  },
  {
    label: "Service Now",
    icon: <Cloud />,
    route: "https://nb.service-now.com/nav_to.do?uri=%2Fhome.do%3F",
    active:
      currentUrl.toLowerCase() ===
        "https://nb.service-now.com/nav_to.do?uri=%2Fhome.do%3F".toLowerCase() &&
      true
  }
];
