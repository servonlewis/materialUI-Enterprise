import React from "react";
import { Map, List, fromJS } from "immutable";
import "antd/dist/antd.css";
import { Menu, Icon, Switch, Modal, Row, Col } from "antd";
import Cookies from "js-cookie";

const SideNavRight = props => {
  const { SubMenu } = Menu;
  const {
    rightNavTheme,
    headerTheme,
    sideNavLeft,
    headerThemeAction,
    leftThemeAction,
    rightThemeAction
  } = props;
  return (
    <div>
      <Modal
        style={{
          float: "right",
          marginRight: "1em"
        }}
        width="20em"
        title="Basic Modal"
        visible={rightNavTheme ? true : false}
        title={<h2 style={{ color: "green" }}>Site Designer</h2>}
        onOk={() => rightThemeAction(true)}
        onCancel={() => rightThemeAction(true)}
      >
        <div style={{ height: "50vh" }}>
          <Row>
            <Col
              span={14}
              style={{
                textShadow: "2px 1px 2px #1890ff",
                fontSize: "1.2em"
              }}
            >
              Left Nav theme
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("leftTheme", "light");
                  return leftThemeAction("light");
                }}
                style={{
                  backgroundColor: "#fff",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("leftTheme", "dark");
                  return leftThemeAction("dark");
                }}
                style={{
                  backgroundColor: "#001529",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              span={14}
              style={{
                textShadow: "2px 1px 2px lightgreen",
                fontSize: "1.2em"
              }}
            >
              Header Theme
            </Col>

            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("headerTheme", "light");
                  return headerThemeAction("light");
                }}
                style={{
                  backgroundColor: "#fff",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("headerTheme", "dark");
                  return headerThemeAction("dark");
                }}
                style={{
                  backgroundColor: "#001529",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  ); // end Return
}; // end App

export default SideNavRight;
