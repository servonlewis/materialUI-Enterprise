import React from "react";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import { Menu, Modal, Row, Col } from "antd";
import Cookies from "js-cookie";

const SideNavRight = props => {
  const { SubMenu } = Menu;
  const {
    rightNavTheme,
    headerTheme,
    sideNavLeft,
    headerThemeAction,
    leftThemeAction,
    rightThemeAction,
    contentThemeAction
  } = props;
  return (
    <div>
      <Modal
        style={{
          float: "right",
          marginRight: "1em",
          color: "black"
        }}
        width="20em"
        title="Basic Modal"
        visible={rightNavTheme ? true : false}
        title={
          <h2
            style={{
              color: "#fff",
              fontFamily: "Comic Sans MS, cursive, sans-serif"
            }}
          >
            Settings
          </h2>
        }
        onOk={() => rightThemeAction(true)}
        onCancel={() => rightThemeAction(true)}
      >
        <div style={{ height: "50vh" }}>
          <Row>
            <Col
              span={14}
              style={{
                textShadow: "2px 1px 2px lightgreen",
                fontSize: "1.2em"
              }}
            >
              Left Nav theme
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }}>
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
          <Row style={{ marginTop: 15 }}>
            <Col
              span={14}
              style={{
                textShadow: "2px 1px 2px lightgreen",
                fontSize: "1.2em"
              }}
            >
              Header Theme
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }}>
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
          <Row style={{ marginTop: 10 }}>
            <Col
              span={14}
              style={{
                textShadow: "2px 1px 2px lightgreen",
                fontSize: "1.2em"
              }}
            >
              Content theme
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }}>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "#f0f2f5");
                  return contentThemeAction("#f0f2f5");
                }}
                style={{
                  backgroundColor: "#f0f2f5",
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
                  Cookies.set("contentTheme", "blanchedalmond");
                  return contentThemeAction("blanchedalmond");
                }}
                style={{
                  backgroundColor: "blanchedalmond",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>

            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "darkgray");
                  return contentThemeAction("darkgray");
                }}
                style={{
                  backgroundColor: "darkgray",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "darkslategrey");
                  return contentThemeAction("darkslategrey");
                }}
                style={{
                  backgroundColor: "darkslategrey",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "aliceblue");
                  return contentThemeAction("aliceblue");
                }}
                style={{
                  backgroundColor: "aliceblue",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "black");
                  return contentThemeAction("black");
                }}
                style={{
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "darkslateblue");
                  return contentThemeAction("darkslateblue");
                }}
                style={{
                  backgroundColor: "darkslateblue",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "deepskyblue");
                  return contentThemeAction("deepskyblue");
                }}
                style={{
                  backgroundColor: "deepskyblue",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "dimgray");
                  return contentThemeAction("dimgray");
                }}
                style={{
                  backgroundColor: "dimgray",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "floralwhite");
                  return contentThemeAction("floralwhite");
                }}
                style={{
                  backgroundColor: "floralwhite",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "lightsalmon");
                  return contentThemeAction("lightsalmon");
                }}
                style={{
                  backgroundColor: "lightsalmon",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "lightseagreen");
                  return contentThemeAction("lightseagreen");
                }}
                style={{
                  backgroundColor: "lightseagreen",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "lightskyblue");
                  return contentThemeAction("lightskyblue");
                }}
                style={{
                  backgroundColor: "lightskyblue",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "maroon");
                  return contentThemeAction("maroon");
                }}
                style={{
                  backgroundColor: "maroon",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "midnightblue");
                  return contentThemeAction("midnightblue");
                }}
                style={{
                  backgroundColor: "midnightblue",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "antiquewhite");
                  return contentThemeAction("antiquewhite");
                }}
                style={{
                  backgroundColor: "antiquewhite",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "#282c34");
                  return contentThemeAction("#282c34");
                }}
                style={{
                  backgroundColor: "#282c34",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
                }}
              />
            </Col>
            <Col span={3}>
              <div
                onClick={() => {
                  Cookies.set("contentTheme", "#123a5f");
                  return contentThemeAction("#123a5f");
                }}
                style={{
                  backgroundColor: "#123a5f",
                  width: 20,
                  height: 20,
                  border: "solid",
                  cursor: "pointer",
                  cursor: "pointer",
                  borderRadius: 3,
                  marginTop: 5
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
