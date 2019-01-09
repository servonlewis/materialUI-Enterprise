import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/Actions/Content-Actions";
import { Map, List, fromJS } from "immutable";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";

const MidContent = props => {
  const { Header, Content, Footer } = Layout;
  const { Item, SubMenu } = Menu;
  return (
    <div>
      <div style={{ padding: 24, minHeight: 380 }}>Content</div>
    </div>
  ); // end Return
}; // end App

export default MidContent;
