import React from "react";
import Home from "./Containers/Home";
import AdminPortal from "./Containers/AdminPortal";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/Store/configureStore";
import history from "./history";
import DesktopMetrics from "./Containers/Desktops/DesktopMetrics";
import DesktopSignoff from "./Containers/Desktops/DesktopSignoff";
import WindowsSoftware from "./Containers/Desktops/WindowsSoftware";
import Kpi from "./Containers/Metrics/Kpi";
import MaintenanceDisable from "./Containers/Monitoring/MaintenanceDisable";
import NbDisable from "./Containers/Monitoring/NbDisable";
import EmployeeWireless from "./Containers/Network/EmployeeWireless";
import F5PoolReport from "./Containers/Network/F5PoolReport";
import VLANReplort from "./Containers/Network/VLANReport";
import WanReporting from "./Containers/Network/WANReporting";
import CIOrphans from "./Containers/Reports/CIOrphans";
import DBModelingScoreCard from "./Containers/Reports/DBModelingScoreCard";
import GlobalRelay from "./Containers/Reports/GlobalRelay";
import HostHealth from "./Containers/Reports/HostHealth";
import HostLookup from "./Containers/Reports/HostLookup";
import HostPatching from "./Containers/Reports/HostPatching";
import ModelingScoreCard from "./Containers/Reports/ModelingScoreCard";
import AccountAccess from "./Containers/Security/AccountAccess";
import AssessmentTool from "./Containers/Security/AssessmentTool";
import ATRScoreCard from "./Containers/Security/ATRScoreCard";
import DataIssues from "./Containers/Security/DataIssues";
import PatchCompliance from "./Containers/Security/PatchCompliance";
import SecureBuildReport from "./Containers/Security/SecureBuildReport";
import SecureConfigReport from "./Containers/Security/SecureConfigReport";
import SplunkHealth from "./Containers/Security/SplunkHealth";
import StartupCommands from "./Containers/Security/StartupCommands";
import VRMTicketReport from "./Containers/Security/VRMTicketReport";
import ApplicationModeling from "./Containers/Self Service/ApplicationModeling";
import DBModeling from "./Containers/Self Service/DBModeling";
import DRSignoff from "./Containers/Self Service/DrSignoff";
import PatchingSignoff from "./Containers/Self Service/PatchingSignoff";
import SignoffForms from "./Containers/Self Service/SignoffForms";
import NetApp from "./Containers/Storage/NetApp";
import NetBackup from "./Containers/Storage/NetBackup";
import VSP from "./Containers/Storage/VSP";
import Profile from "./Containers/Profile";

const store = configureStore();

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            path="/AdminPortal"
            render={props => <AdminPortal {...props} />}
          />
          <Route path="/Profile" render={props => <Profile {...props} />} />
          <Route
            path="/Desktops/DesktopMetrics"
            render={props => <DesktopMetrics {...props} />}
          />
          <Route
            path="/Desktops/DesktopSignoff"
            render={props => <DesktopSignoff {...props} />}
          />
          <Route
            path="/Desktops/WindowsSoftware"
            render={props => <WindowsSoftware {...props} />}
          />
          <Route path="/Metrics/Kpi" render={props => <Kpi {...props} />} />
          <Route
            path="/Monitoring/MaintenanceDisable"
            render={props => <MaintenanceDisable {...props} />}
          />
          <Route
            path="/Monitoring/NbDisable"
            render={props => <NbDisable {...props} />}
          />
          <Route
            path="/Network/EmployeeWireless"
            render={props => <EmployeeWireless {...props} />}
          />
          <Route
            path="/Network/F5PoolReport"
            render={props => <F5PoolReport {...props} />}
          />
          <Route
            path="/Network/VLANReport"
            render={props => <VLANReplort {...props} />}
          />
          <Route
            path="/Network/WanReporting"
            render={props => <WanReporting {...props} />}
          />
          <Route
            path="/Reports/CIOrphans"
            render={props => <CIOrphans {...props} />}
          />
          <Route
            path="/Reports/DBModelingScoreCard"
            render={props => <DBModelingScoreCard {...props} />}
          />
          <Route
            path="/Reports/GlobalRelay"
            render={props => <GlobalRelay {...props} />}
          />
          <Route
            path="/Reports/HostHealth"
            render={props => <HostHealth {...props} />}
          />
          <Route
            path="/Reports/HostLookup"
            render={props => <HostLookup {...props} />}
          />
          <Route
            path="/Reports/HostPatching"
            render={props => <HostPatching {...props} />}
          />
          <Route
            path="/Reports/ModelingScoreCard"
            render={props => <ModelingScoreCard {...props} />}
          />
          <Route
            path="/Security/AccountAccess"
            render={props => <AccountAccess {...props} />}
          />
          <Route
            path="/Security/AssessmentTool"
            render={props => <AssessmentTool {...props} />}
          />
          <Route
            path="/Security/ATRScoreCard"
            render={props => <ATRScoreCard {...props} />}
          />
          <Route
            path="/Security/DataIssues"
            render={props => <DataIssues {...props} />}
          />
          <Route
            path="/Security/PatchCompliance"
            render={props => <PatchCompliance {...props} />}
          />
          <Route
            path="/Security/SecureBuildReport"
            render={props => <SecureBuildReport {...props} />}
          />
          <Route
            path="/Security/SecureConfigReport"
            render={props => <SecureConfigReport {...props} />}
          />
          <Route
            path="/Security/SplunkHealth"
            render={props => <SplunkHealth {...props} />}
          />
          <Route
            path="/Security/StartupCommands"
            render={props => <StartupCommands {...props} />}
          />
          <Route
            path="/Security/VRMTicketReport"
            render={props => <VRMTicketReport {...props} />}
          />
          <Route
            path="/SelfService/ApplicationModeling"
            render={props => <ApplicationModeling {...props} />}
          />
          <Route
            path="/SelfService/DBModeling"
            render={props => <DBModeling {...props} />}
          />
          <Route
            path="/SelfService/DRSignoff"
            render={props => <DRSignoff {...props} />}
          />
          <Route
            path="/SelfService/PatchingSignoff"
            render={props => <PatchingSignoff {...props} />}
          />
          <Route
            path="/SelfService/SignoffForms"
            render={props => <SignoffForms {...props} />}
          />
          <Route
            path="/Storage/NetApp"
            render={props => <NetApp {...props} />}
          />
          <Route
            path="/Storage/NetBackup"
            render={props => <NetBackup {...props} />}
          />
          <Route path="/Storage/VSP" render={props => <VSP {...props} />} />
        </div>
      </Router>
    </Provider>
  );
};
