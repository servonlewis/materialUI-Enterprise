import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/Actions/HeaderNav-Actions";
import { Map, List, fromJS } from "immutable";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Input, Radio, Avatar } from "antd";
import Cookies from "js-cookie";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
const HeaderNav = props => {
  const { Item, SubMenu } = Menu;
  const { Search } = Input;
  const RadioGroup = Radio.Group;
  const { headerTheme } = props;
  return (
    <Menu
      mode="horizontal"
      style={{ lineHeight: "64px" }}
      theme={
        Cookies.get("headerTheme") ? Cookies.get("headerTheme") : headerTheme
      }
    >
      <SubMenu
        title={
          <Avatar
            size="large"
            icon="user"
            src="http://iphoto.nb.com/20006408.jpeg"
          />
        }
        style={{ float: "right" }}
      >
        <Item>My Profile</Item>
      </SubMenu>
      <Item key="2" style={{ float: "right" }}>
        <Icon type="mail" />
        nav 2
      </Item>
      <Item
        key="3"
        style={{ float: "right", cursor: "default" }}
        disabled={true}
      >
        <Search
          placeholder="Enter a valid user or desktop"
          onSearch={value => console.log(value)}
          enterButton={true}
          style={{ width: "23em" }}
        />
      </Item>
      <Item
        key="4"
        style={{ float: "right", cursor: "default" }}
        disabled={true}
      >
        <RadioGroup /*  value={1} */>
          <Radio value={1} defaultChecked={true} style={{ color: "#1890ff" }}>
            User
          </Radio>
          <Radio value={2} style={{ color: "#1890ff" }}>
            Desktop
          </Radio>
        </RadioGroup>
      </Item>
    </Menu>
  ); // end Return
}; // end App

export default HeaderNav;
