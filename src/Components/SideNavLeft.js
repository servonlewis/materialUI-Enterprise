import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/Actions/SideNavLeft-Actions";
import { Map, List, fromJS } from "immutable";
import "antd/dist/antd.css";
import { Menu, Icon, Switch, Modal } from "antd";
import Cookies from "js-cookie";

const SideNavLeft = props => {
  const { SubMenu } = Menu;
  const { collapsed, sideNavLeft } = props;
  return (
    <div>
      {collapsed ? (
        <Menu
          mode="inline "
          theme={
            Cookies.get("leftTheme") ? Cookies.get("leftTheme") : sideNavLeft
          }
        >
          <Menu.Item title="Home" key="10" style={{ marginTop: "1em" }}>
            <span
              style={{
                fontSize: "1.2em",
                fontFamily: "Comic Sans MS, cursive, sans-serif"
              }}
            >
              NB
            </span>
          </Menu.Item>

          <Menu.Item key="1">
            <Icon type="mail" />
            <span> Home </span>
          </Menu.Item>

          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="appstore" />
                <span>User Actions</span>
              </span>
            }
          >
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>Desktop Actions</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 3</Menu.Item>
            <Menu.Item key="6">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="setting" />
                <span>Group</span>
              </span>
            }
          >
            <Menu.Item key="7">Option 7</Menu.Item>
          </SubMenu>
        </Menu>
      ) : (
        <Menu
          mode="inline"
          theme={
            Cookies.get("leftTheme") ? Cookies.get("leftTheme") : sideNavLeft
          }
        >
          <Menu.Item
            title="Home"
            key="10"
            style={{
              backgroundColor: "#123a5f",
              padding: "2.2em",
              marginTop: "0"
            }}
          >
            <Icon
              type="frown"
              theme="twoTone"
              style={{
                fontSize: "2em",
                position: "relative",
                top: collapsed ? null : "-.7em"
              }}
            />

            <span
              style={{
                color: "white",
                fontSize: "1.8em",
                fontFamily: "Comic Sans MS, cursive, sans-serif",
                position: "relative",
                top: collapsed ? null : "-.7em"
              }}
            >
              Neuberger
            </span>
          </Menu.Item>

          <Menu.Item key="1">
            <Icon type="mail" />
            <span> Home </span>
          </Menu.Item>

          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="appstore" />
                <span>User Actions</span>
              </span>
            }
          >
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>Desktop Actions</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 3</Menu.Item>
            <Menu.Item key="6">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="setting" />
                <span>Group</span>
              </span>
            }
          >
            <Menu.Item key="7">Option 7</Menu.Item>
          </SubMenu>
        </Menu>
      )}
    </div>
  ); // end Return
}; // end App

export default SideNavLeft;
