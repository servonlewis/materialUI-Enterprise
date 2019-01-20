import React from "react";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import { Layout, Menu, Breadcrumb, Row, Col, Card } from "antd";

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
          <Breadcrumb style={{ textShadow: "1px 1px  white" }}>
            <Breadcrumb.Item>Dms</Breadcrumb.Item>
            <Breadcrumb.Item>Main</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row align="middle" type="flex">
        <Col span={24}>
          <Card
            style={{
              width: "8%",
              borderRadius: 10,
              marginLeft: "46%"
            }}
            cover={
              <img alt="userPic" src="http://iphoto.nb.com/20006408.jpeg" />
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
