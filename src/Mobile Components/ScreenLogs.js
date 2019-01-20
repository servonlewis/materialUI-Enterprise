import React from "react";
import { TabBar, WhiteSpace } from "antd-mobile";
import { Icon, Breadcrumb } from "antd";
import { MainNavBar } from "./HeaderNav";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";

const Main = props => {
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
    <div>
      <MainNavBar
        getMobileModal={getMobileModal}
        mobileModal={mobileModal}
        mobileLeftMenu={mobileLeftMenu}
        getmobileLeftMenu={getmobileLeftMenu}
        mobileAvatarMenu={mobileAvatarMenu}
        getmobileAvatarMenu={getmobileAvatarMenu}
        mobileTabSelect={mobileTabSelect}
        getMobileTabBarSelect={getMobileTabBarSelect}
      />
      <div style={{ position: "relative", top: "3.3em" }}>
        <Breadcrumb style={{ textShadow: "1px 1px  white" }}>
          <Breadcrumb.Item>Dms</Breadcrumb.Item>
          <Breadcrumb.Item>Logs</Breadcrumb.Item>
        </Breadcrumb>
        <WhiteSpace size="lg" />
      </div>
    </div>
  );
};

export default Main;
