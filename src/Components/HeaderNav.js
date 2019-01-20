import React from "react";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import { Menu, Icon, Input, Radio, Avatar } from "antd";
import Cookies from "js-cookie";

const HeaderNav = props => {
  const { Item, SubMenu } = Menu;
  const { Search } = Input;
  const RadioGroup = Radio.Group;
  const { rightThemeAction, rightNavTheme } = props;
  return (
    <Menu
      mode="horizontal"
      style={{ lineHeight: "64px" }}
      theme={Cookies.get("headerTheme")}
    >
      <Icon
        type="setting"
        theme="twoTone"
        twoToneColor="green"
        style={{
          fontSize: "2em",
          float: "right",
          marginTop: ".7em",
          marginLeft: "2em",
          cursor: "pointer"
        }}
        onClick={() => rightThemeAction(rightNavTheme ? true : false)}
      />
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

      <Search
        placeholder="Enter a valid user or desktop"
        onSearch={value => console.log(value)}
        enterButton={true}
        style={{ width: "23em", float: "right", marginTop: "1em" }}
      />

      <RadioGroup style={{ float: "right", marginTop: "0em" }}>
        <Radio value={1} defaultChecked={true} style={{ color: "#1890ff" }}>
          User
        </Radio>
        <Radio value={2} style={{ color: "#1890ff" }}>
          Desktop
        </Radio>
      </RadioGroup>
    </Menu>
  ); // end Return
}; // end App

export default HeaderNav;
