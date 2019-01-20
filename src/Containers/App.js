import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/Actions/App-Actions";
import * as contentActions from "../redux/Actions/Content-Actions";
import * as headerActions from "../redux/Actions/HeaderNav-Actions";
import * as leftActions from "../redux/Actions/SideNavLeft-Actions";
import * as rightActions from "../redux/Actions/SideNavRight-Actions";
import MobileParent from "../Mobile Components/TabBar";
import MidContent from "../Components/Content";
import HeaderNav from "../Components/HeaderNav";
import SideNavLeft from "../Components/SideNavLeft";
import SideNavRight from "../Components/SideNavRight";
import EndFooter from "../Components/Footer";
import Cookies from "js-cookie";
import { push } from "connected-react-router";
import { BrowserView, MobileView } from "react-device-detect";
import { Layout } from "antd";

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
      rightThemeAction,
      contentThemeAction,
      getMobileModal,
      mobileModal,
      mobileLeftMenu,
      getmobileLeftMenu,
      mobileAvatarMenu,
      getmobileAvatarMenu,
      mobileTabSelect,
      getMobileTabBarSelect
    } = this.props;
    return (
      <div>
        <BrowserView>
          <Layout hasSider={true} style={{ minHeight: "100vh" }}>
            <Sider
              theme={Cookies.get("leftTheme")}
              breakpoint="xl"
              collapsible={true}
              collapsedWidth="5em"
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
                      : "#fff",
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
                  marginLeft: collapsed ? "5em" : "20em",
                  marginTop: "4.6em",
                  transition: ".3s",
                  backgroundColor: Cookies.get("contentTheme")
                }}
              >
                <MidContent />
              </Content>

              <Footer
                style={{
                  backgroundColor: Cookies.get("contentTheme"),
                  color: "white",
                  textShadow: "2px 1px 2px black"
                }}
              >
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
              contentThemeAction={contentThemeAction}
            />
          </Layout>
        </BrowserView>

        <MobileView>
          <MobileParent
            mobileModal={mobileModal}
            getMobileModal={getMobileModal}
            mobileLeftMenu={mobileLeftMenu}
            getmobileLeftMenu={getmobileLeftMenu}
            mobileAvatarMenu={mobileAvatarMenu}
            getmobileAvatarMenu={getmobileAvatarMenu}
            mobileTabSelect={mobileTabSelect}
            getMobileTabBarSelect={getMobileTabBarSelect}
          />
        </MobileView>
      </div>
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
  rightNavTheme: state.sideNavRight.theme,
  contentTheme: state.contentReducer.theme,
  mobileModal: state.headerNav.mobileModal,
  mobileLeftMenu: state.headerNav.mobileLeftMenu,
  mobileAvatarMenu: state.headerNav.mobileAvatarMenu,
  mobileTabSelect: state.headerNav.mobileTabSelect
});
const mapDispatchToProps = dispatch => ({
  collapseMe: collapsed => dispatch(actions.collapseMe(collapsed)),
  headerThemeAction: color => dispatch(headerActions.theme(color)),
  leftThemeAction: color => dispatch(leftActions.theme(color)),
  rightThemeAction: color => dispatch(rightActions.theme(color)),
  contentThemeAction: color => dispatch(contentActions.theme(color)),
  getMobileModal: data => dispatch(headerActions.mobileModal(data)),
  getmobileLeftMenu: data => dispatch(headerActions.mobileLeftMenu(data)),
  getmobileAvatarMenu: data => dispatch(headerActions.mobileAvatarMenu(data)),
  getMobileTabBarSelect: data =>
    dispatch(headerActions.mobileTabBarSelect(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
