import React from "react";
import {
  NavBar,
  Icon,
  Modal,
  Button,
  WingBlank,
  WhiteSpace,
  List,
  Toast,
  Popover
} from "antd-mobile";
import { Avatar, Radio, Input, Icon as IconDesktop } from "antd";
import { Menu } from "antd-mobile";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import { data } from "./constants";

export const MainNavBar = props => {
  const {
    getMobileModal,
    mobileModal,
    mobileLeftMenu,
    getmobileLeftMenu,
    mobileAvatarMenu,
    getmobileAvatarMenu,
    mobileTabSelect
  } = props;
  const { Search } = Input;
  const RadioGroup = Radio.Group;
  const { Item } = Popover;
  return (
    <div>
      <NavBar
        style={{ position: "fixed", width: "100%", top: 0, zIndex: 50 }}
        mode="dark"
        leftContent={
          <IconDesktop key="1" type="bars" style={{ fontSize: "1.5em" }} />
        }
        onLeftClick={e => {
          mobileLeftMenu === "hidden"
            ? getmobileLeftMenu("visible")
            : getmobileLeftMenu("hidden");
          getmobileAvatarMenu(false);
        }}
        rightContent={[
          <Icon
            key="0"
            type="search"
            style={{ marginRight: "16px" }}
            onClick={() => {
              getMobileModal(true);
              getmobileAvatarMenu(false);
            }}
          />,
          <div
            onClick={() =>
              mobileAvatarMenu
                ? getmobileAvatarMenu(false)
                : getmobileAvatarMenu(true)
            }
          >
            <Avatar
              size="large"
              icon="user"
              src="http://iphoto.nb.com/20006408.jpeg"
            />
          </div>
        ]}
      >
        <Popover
          mask
          disabled
          visible={mobileAvatarMenu}
          overlay={[
            <Item key="4" value="scan">
              Servon Lewis
            </Item>,
            <Item key="5" value="t">
              Infrastructure Technology Support Itsm
            </Item>
          ]}
          align={{
            offset: [300000, 2]
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center"
            }}
          />
        </Popover>
        <b>Dms</b>
      </NavBar>

      <Modal
        visible={mobileModal}
        transparent
        title="Search"
        maskClosable
        onClose={() => getMobileModal(false)}
        footer={[
          {
            text: "Cancel",
            onPress: () => getMobileModal(false)
          }
        ]}
      >
        <RadioGroup>
          <Radio value={1} defaultChecked={true} style={{ color: "#1890ff" }}>
            User
          </Radio>
          <Radio value={2} style={{ color: "#1890ff" }}>
            Desktop
          </Radio>
        </RadioGroup>
        <Search
          placeholder="Name"
          onSearch={value => {
            console.log(value);
            getMobileModal(false);
          }}
          enterButton={true}
          style={{ marginTop: "1em" }}
        />
      </Modal>

      <Modal
        visible={mobileLeftMenu === "hidden" ? false : true}
        popup
        transparent
        maskClosable
        animationType="slide-up"
        onClose={() => getmobileLeftMenu("hidden")}
        style={{ marginTop: "3.2em" }}
      >
        <Menu data={data} onChange={console.log} />
      </Modal>
    </div>
  ); // end Return
}; // end App
