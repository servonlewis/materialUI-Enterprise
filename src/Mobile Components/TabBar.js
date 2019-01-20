import React from "react";
import { TabBar } from "antd-mobile";
import { Icon } from "antd";
import Main from "./ScreenMain";
import Dashboard from "./ScreenDashboard";
import ScriptActions from "./ScreenScripts";
import Altiris from "./ScreenAtiris";
import Logs from "./ScreenLogs";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import { Script } from "vm";

const MobileParent = props => {
  const { Item } = TabBar;
  const {
    getMobileModal,
    mobileModal,
    mobileLeftMenu,
    getmobileLeftMenu,
    mobileAvatarMenu,
    getmobileAvatarMenu,
    getMobileTabBarSelect,
    mobileTabSelect
  } = props;
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100%",
        top: 0
      }}
    >
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="aliceblue"
      >
        <Item
          title="Main"
          key="Main"
          onPress={() => {
            getMobileTabBarSelect("Main");
            getmobileAvatarMenu(false);
          }}
          selected={mobileTabSelect === "Main" ? true : false}
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://image.flaticon.com/icons/svg/609/609803.svg) center center /  25px 25px no-repeat"
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://image.flaticon.com/icons/svg/609/609803.svg) center center /  25px 25px no-repeat"
              }}
            />
          }
        >
          <Main
            getMobileModal={getMobileModal}
            mobileModal={mobileModal}
            mobileLeftMenu={mobileLeftMenu}
            getmobileLeftMenu={getmobileLeftMenu}
            mobileAvatarMenu={mobileAvatarMenu}
            getmobileAvatarMenu={getmobileAvatarMenu}
            mobileTabSelect={mobileTabSelect}
            getMobileTabBarSelect={getMobileTabBarSelect}
          />
        </Item>
        <Item
          title="Dashboard"
          key="Dashboard"
          onPress={() => {
            getMobileTabBarSelect("Dashboard");
            getmobileAvatarMenu(false);
          }}
          selected={mobileTabSelect === "Dashboard" ? true : false}
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://image.flaticon.com/icons/svg/1211/1211701.svg) center center /  25px 25px no-repeat"
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://image.flaticon.com/icons/svg/1211/1211701.svg) center center /  25px 25px no-repeat"
              }}
            />
          }
        >
          <Dashboard
            getMobileModal={getMobileModal}
            mobileModal={mobileModal}
            mobileLeftMenu={mobileLeftMenu}
            getmobileLeftMenu={getmobileLeftMenu}
            mobileAvatarMenu={mobileAvatarMenu}
            getmobileAvatarMenu={getmobileAvatarMenu}
            mobileTabSelect={mobileTabSelect}
            getMobileTabBarSelect={getMobileTabBarSelect}
          />
        </Item>
        <Item
          title="Script Actions"
          key=" Script Actions"
          onPress={() => {
            getMobileTabBarSelect("Scripts");
            getmobileAvatarMenu(false);
          }}
          selected={mobileTabSelect === "Scripts" ? true : false}
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://image.flaticon.com/icons/svg/1336/1336693.svg) center center /  25px 25px no-repeat"
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://image.flaticon.com/icons/svg/1336/1336693.svg) center center /  25px 25px no-repeat"
              }}
            />
          }
        >
          <ScriptActions
            getMobileModal={getMobileModal}
            mobileModal={mobileModal}
            mobileLeftMenu={mobileLeftMenu}
            getmobileLeftMenu={getmobileLeftMenu}
            mobileAvatarMenu={mobileAvatarMenu}
            getmobileAvatarMenu={getmobileAvatarMenu}
            mobileTabSelect={mobileTabSelect}
            getMobileTabBarSelect={getMobileTabBarSelect}
          />
        </Item>
        <Item
          title="Altiris"
          key=" Altiris"
          onPress={() => {
            getMobileTabBarSelect("Altiris");
            getmobileAvatarMenu(false);
          }}
          selected={mobileTabSelect === "Altiris" ? true : false}
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(http://icons.iconarchive.com/icons/zakar/shining-z/128/symantec-SZ-icon.png) center center /  25px 25px no-repeat"
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(http://icons.iconarchive.com/icons/zakar/shining-z/128/symantec-SZ-icon.png) center center /  25px 25px no-repeat"
              }}
            />
          }
        >
          <Altiris
            getMobileModal={getMobileModal}
            mobileModal={mobileModal}
            mobileLeftMenu={mobileLeftMenu}
            getmobileLeftMenu={getmobileLeftMenu}
            mobileAvatarMenu={mobileAvatarMenu}
            getmobileAvatarMenu={getmobileAvatarMenu}
            mobileTabSelect={mobileTabSelect}
            getMobileTabBarSelect={getMobileTabBarSelect}
          />
        </Item>
        <Item
          title="Logging"
          key="Logging"
          onPress={() => {
            getMobileTabBarSelect("Logs");
            getmobileAvatarMenu(false);
          }}
          selected={mobileTabSelect === "Logs" ? true : false}
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://image.flaticon.com/icons/svg/1039/1039328.svg) center center /  25px 25px no-repeat"
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://image.flaticon.com/icons/svg/1039/1039328.svg) center center /  25px 25px no-repeat"
              }}
            />
          }
        >
          <Logs
            getMobileModal={getMobileModal}
            mobileModal={mobileModal}
            mobileLeftMenu={mobileLeftMenu}
            getmobileLeftMenu={getmobileLeftMenu}
            mobileAvatarMenu={mobileAvatarMenu}
            getmobileAvatarMenu={getmobileAvatarMenu}
            mobileTabSelect={mobileTabSelect}
            getMobileTabBarSelect={getMobileTabBarSelect}
          />
        </Item>
      </TabBar>
    </div>
  ); // end Return
}; // end App

export default MobileParent;
