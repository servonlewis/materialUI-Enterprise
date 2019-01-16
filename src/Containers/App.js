import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/Actions/App-Actions";
import * as contentActions from "../redux/Actions/Content-Actions";
import * as headerActions from "../redux/Actions/HeaderNav-Actions";
import * as leftActions from "../redux/Actions/SideNavLeft-Actions";
import * as rightActions from "../redux/Actions/SideNavRight-Actions";
import { Map, List, fromJS } from "immutable";
import MidContent from "../Components/Content";
import HeaderNav from "../Components/HeaderNav";
import SideNavLeft from "../Components/SideNavLeft";
import SideNavRight from "../Components/SideNavRight";
import EndFooter from "../Components/Footer";
import Cookies from "js-cookie";
import { push } from "connected-react-router";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import { Layout, Row, Col, Icon, Modal } from "antd";

class App extends Component {
  componentDidMount() {}
  render() {
    const { Header, Sider, Content, Footer } = Layout;
    const {
      collapsed,
      sideNavLeft,
      headerTheme,
      rightNavTheme,
      collapseMe,
      headerThemeAction,
      leftThemeAction,
      rightThemeAction
    } = this.props;
    return (
      <Layout hasSider={true} style={{ minHeight: "100vh" }}>
        <Sider
          theme={Cookies.get("leftTheme")}
          breakpoint="xl"
          collapsible={true}
          collapsedWidth={isMobile ? 0 : "5em"}
          width={"20em"}
          style={{
            position: "fixed",
            overflow: "scroll",
            zIndex: 50000,
            height: "100vh",
            overflowY: "auto",
            overflowX: "hidden"
          }}
          onCollapse={collapsed => collapseMe(collapsed)}
        >
          <SideNavLeft
            collapsed={collapsed}
            sideNavLeft={sideNavLeft}
            push={push}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              backgroundColor:
                Cookies.get("headerTheme") === "dark"
                  ? "#001529"
                  : Cookies.get("headerTheme") === "light"
                  ? "#fff"
                  : null,
              position: "fixed",
              overflow: "hidden",
              zIndex: 5,
              width: "100%"
            }}
          >
            <HeaderNav
              headerTheme={headerTheme}
              rightThemeAction={rightThemeAction}
              rightNavTheme={rightNavTheme}
            />
          </Header>
          <Content
            style={{
              zIndex: 0,
              marginLeft: collapsed ? "6em" : "21em",
              marginTop: "5em",
              transition: ".3s"
            }}
          >
            <MidContent />
          </Content>

          <Footer>
            <EndFooter />
          </Footer>
        </Layout>

        <SideNavRight
          rightNavTheme={rightNavTheme}
          sideNavLeft={sideNavLeft}
          headerTheme={headerTheme}
          headerThemeAction={headerThemeAction}
          leftThemeAction={leftThemeAction}
          rightThemeAction={rightThemeAction}
        />
      </Layout>
    ); // end Return
  } // end Render
} // end App

const mapStateToProps = state => ({
  collapsed: state.appReducer.collapsed,
  event: state.appReducer.event,
  config: state.appReducer.config,
  endpoint: state.appReducer.endpoint,
  sideNavLeft: state.sideNavLeft.theme,
  headerTheme: state.headerNav.theme,
  rightNavTheme: state.sideNavRight.theme
});

const mapDispatchToProps = dispatch => ({
  collapseMe: collapsed => dispatch(actions.collapseMe(collapsed)),
  headerThemeAction: color => dispatch(headerActions.theme(color)),
  leftThemeAction: color => dispatch(leftActions.theme(color)),
  rightThemeAction: color => dispatch(rightActions.theme(color))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
