import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/Actions/Content-Actions";
import { Map, List, fromJS } from "immutable";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Row, Col, Card, Icon, Avatar } from "antd";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

const MidContent = props => {
  const { Header, Content, Footer } = Layout;
  const { Item, SubMenu } = Menu;
  return (
    <div>
      <ContentMain />
    </div>
  ); // end Return
}; // end App

const ContentMain = props => {
  const { Header, Content, Footer } = Layout;
  const { Item, SubMenu } = Menu;
  const { Meta } = Card;
  return (
    <div>
      <Row justify="space-around" type="flex">
        <Col span={24} accessKey>
          <Breadcrumb>
            <Breadcrumb.Item>Dms</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Main</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row align="middle" type="flex">
        <Col span={24} offset={11}>
          <Card
            style={{ width: 175, borderRadius: 10 }}
            cover={
              <img
                alt="userPic"
                src="http://iphoto.nb.com/20006408.jpeg"
                style={{ height: 125, borderRadius: 10 }}
              />
            }
          >
            <Meta title="Servon Lewis" description="ITSM Engineering" />
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" type="flex" style={{ marginTop: 15 }}>
        <Col span={11}>
          <Card
            title="Card title"
            bordered={false} /* style={{ width: 700 }} */
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>

        <Col span={11}>
          <Card
            title="Card title"
            bordered={false} /* style={{ width: 700 }} */
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" type="flex" style={{ marginTop: 15 }}>
        <Col span={11}>
          <Card
            title="Card title"
            bordered={false} /* style={{ width: 700 }} */
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>

        <Col span={11}>
          <Card
            title="Card title"
            bordered={false} /* style={{ width: 700 }} */
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" type="flex" style={{ marginTop: 15 }}>
        <Col span={11}>
          <Card
            title="Card title"
            bordered={false} /* style={{ width: 700 }} */
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>

        <Col span={11}>
          <Card
            title="Card title"
            bordered={false} /* style={{ width: 700 }} */
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" type="flex" style={{ marginTop: 15 }}>
        <Col span={11}>
          <Card
            title="Card title"
            bordered={false} /* style={{ width: 700 }} */
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>

        <Col span={11}>
          <Card
            title="Card title"
            bordered={false} /* style={{ width: 700 }} */
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  ); // end Return
}; // end App

export default MidContent;
