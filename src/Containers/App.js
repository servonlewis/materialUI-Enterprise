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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import { Layout, Row, Col, Icon, Modal } from "antd";

class App extends Component {
  componentDidMount() {
    /* 
    this.props.dispatch(leftActions.theme(Cookies.get("leftTheme")));
    this.props.dispatch(rightActions.theme(Cookies.get("rightTheme")));
    this.props.dispatch(headerActions.theme(Cookies.get("headerTheme"))); */
  }
  render() {
    const { Header, Sider, Content, Footer } = Layout;
    const {
      dispatch,
      collapsed,
      sideNavLeft,
      headerTheme,
      rightNavTheme
    } = this.props;
    const { collapseMe } = actions;
    return (
      <Layout hasSider={true} style={{ minHeight: "100vh" }}>
        <Sider
          theme={Cookies.get("leftTheme")}
          breakpoint="xl"
          collapsible={true}
          collapsedWidth={isMobile ? 0 : "5em"}
          width={"20em"}
          style={{
            position: isMobile ? "fixed" : null,
            height: "100vh",
            overflow: isMobile ? null : "hidden",
            marginTop: isMobile ? "5em" : null
          }}
          onCollapse={collapsed => dispatch(collapseMe(collapsed))}
        >
          <SideNavLeft
            collapsed={collapsed}
            sideNavLeft={sideNavLeft}
            dispatch={dispatch}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              backgroundColor: isBrowser
                ? Cookies.get("headerTheme") !== "dark"
                  ? "#fff "
                  : "#001529"
                : "#fff"
            }}
          >
            <HeaderNav headerTheme={headerTheme} dispatch={dispatch} />
          </Header>
          <Content>
            <MidContent dispatch={dispatch} />
          </Content>

          <Footer>
            <EndFooter />
          </Footer>
        </Layout>

        <Sider
          collapsedWidth="0em"
          collapsible={true}
          defaultCollapsed={true}
          width={"20em"}
          style={{ height: "100vh" }}
          trigger={isMobile ? null : ""}
          onCollapse={collapsed => {
            const elements = document.getElementsByClassName(
              "ant-layout-sider-zero-width-trigger"
            );
            !collapsed
              ? elements[0].classList.add("rightTrigger-after")
              : elements[0].classList.remove("rightTrigger-after");
          }}
        >
          <SideNavRight
            rightNavTheme={rightNavTheme}
            sideNavLeft={sideNavLeft}
            headerTheme={headerTheme}
            dispatch={dispatch}
          />
        </Sider>
      </Layout>
    ); // end Return
  } // end Render
} // end App

const mapStateToProps = state => {
  return {
    collapsed: state.appReducer.collapsed,
    event: state.appReducer.event,
    config: state.appReducer.config,
    endpoint: state.appReducer.endpoint,
    sideNavLeft: state.sideNavLeft.theme,
    headerTheme: state.headerNav.theme,
    rightNavTheme: state.sideNavRight.theme
  };
};
export default connect(mapStateToProps)(App);
