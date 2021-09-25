import React from "react";
import Image from "next/image";
import { Layout, Menu, Col, Row } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

import SigninButton from "../SigninButton";
import LogoImage from "/public/static/energi.png";

const { Content } = Layout;

function LayoutComponent({ children }) {
  const router = useRouter();

  const getMenuItem = (text, path) => {
    return (
      <Menu.Item
        onClick={() => router.push(path)}
        key={`${path}${Math.random()}`}
      >
        <label
          style={{
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          {text}
        </label>
      </Menu.Item>
    );
  };

  return (
    <Layout>
      <Row className="layout-gradient">
        <Col
          md={{ span: 8, offset: 4 }}
          lg={{ span: 8, offset: 4 }}
          sm={{ span: 22, offset: 2 }}
          xs={{ span: 22, offset: 2 }}
        >
          <Link href="/" passHref>
            <div className="layout-logo">
              <Image
                height={100}
                width={400}
                src={LogoImage}
                alt="Energi logo"
                onClick={() => router.push("/")}
              />
            </div>
          </Link>
        </Col>
        <Col
          md={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 0 }}
          sm={{ span: 21, offset: 3 }}
          xs={{ span: 24, offset: 0 }}
        >
          <Menu className="layout-menu" mode="horizontal" theme="light">
            {getMenuItem("Energi Swap", "https://app.energiswap.exchange/")}
            {getMenuItem(
              "Join Our Team",
              "https://www.energi.world/join-our-team/",
            )}
            {getMenuItem("Energi Nexus", "https://nexus.energi.network/")}
            {getMenuItem("About us", "https://www.energi.world/about/")}
            <Menu.Item>
              <SigninButton />
            </Menu.Item>
          </Menu>
        </Col>
      </Row>

      <Content className="layout-gradient layout-content">{children}</Content>
    </Layout>
  );
}

export default LayoutComponent;
