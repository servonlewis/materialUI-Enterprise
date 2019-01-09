import React, { Component } from "react";
import { connect } from "react-redux";
import * as rightActions from "../redux/Actions/SideNavRight-Actions";
import * as headerActions from "../redux/Actions/HeaderNav-Actions";
import * as leftActions from "../redux/Actions/SideNavLeft-Actions";
import { Map, List, fromJS } from "immutable";
import "antd/dist/antd.css";
import { Menu, Icon, Switch } from "antd";
import Cookies from "js-cookie";

const SideNavRight = props => {
  const { SubMenu } = Menu;
  const { rightNavTheme, headerTheme, sideNavLeft, dispatch } = props;
  return (
    <div>
      <Menu
        mode="inline"
        theme={
          Cookies.get("rightTheme") ? Cookies.get("rightTheme") : rightNavTheme
        }
        style={{ height: "100vh" }}
        inlineCollapsed={true}
        forceSubMenuRender={true}
      >
        <Menu.Item key="1" style={{ marginTop: "4em", fontSize: "1.5em" }}>
          <Icon type="setting" />
          Page Styling
        </Menu.Item>
        <Menu.Item key="2" style={{}}>
          Left Nav theme
          <Switch
            style={{ float: "right", marginTop: ".7em" }}
            checkedChildren={
              Cookies.get("leftTheme") ? Cookies.get("leftTheme") : sideNavLeft
            }
            unCheckedChildren={
              Cookies.get("leftTheme") ? Cookies.get("leftTheme") : sideNavLeft
            }
            defaultChecked={
              Cookies.get("leftTheme") ? Cookies.get("leftTheme") : sideNavLeft
            }
            onChange={event => {
              Cookies.set("leftTheme", sideNavLeft);
              console.log(sideNavLeft);
              return dispatch(leftActions.theme(event));
            }}
          />
        </Menu.Item>
        <Menu.Item key="3" style={{}}>
          Right Nav theme
          <Switch
            style={{ float: "right", marginTop: ".7em" }}
            checkedChildren={
              Cookies.get("rightTheme")
                ? Cookies.get("rightTheme")
                : rightNavTheme
            }
            unCheckedChildren={
              Cookies.get("rightTheme")
                ? Cookies.get("rightTheme")
                : rightNavTheme
            }
            defaultChecked={
              Cookies.get("rightTheme")
                ? Cookies.get("rightTheme")
                : rightNavTheme
            }
            onChange={event => {
              Cookies.set("rightTheme", rightNavTheme);
              return dispatch(rightActions.theme(event));
            }}
          />
        </Menu.Item>
        <Menu.Item key="4" style={{}}>
          Header Nav theme
          <Switch
            style={{ float: "right", marginTop: ".7em" }}
            checkedChildren={
              Cookies.get("headerTheme")
                ? Cookies.get("headerTheme")
                : headerTheme
            }
            unCheckedChildren={
              Cookies.get("headerTheme")
                ? Cookies.get("headerTheme")
                : headerTheme
            }
            defaultChecked={
              Cookies.get("headerTheme")
                ? Cookies.get("headerTheme")
                : headerTheme
            }
            onChange={event => {
              Cookies.set("headerTheme", headerTheme);
              return dispatch(headerActions.theme(event));
            }}
          />
        </Menu.Item>
      </Menu>
    </div>
  ); // end Return
}; // end App

export default SideNavRight;
