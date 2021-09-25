import React from "react";
import Image from "next/image";
import { Col, Typography, Row, Tabs, Card } from "antd";

import Layout from "../src/components/Layout";
import Meta from "../src/components/Meta";

import EthLogo from "../public/static/ethereum-logo.png";
import PolygonLogo from "../public/static/polygon-logo.png";
import BinanceChainLogo from "../public/static/binance-chain-logo.png";
import AvalancheLogo from "../public/static/cryptocurrency/AVAX.svg";

import LatestBlocks from "../src/components/LatestBlocks";

const { TabPane } = Tabs;

const { Title } = Typography;

function Home() {
  return (
    <>
      <Meta
        title="Energi Cryptocurrency"
        description="Energi is a revolutionary cryptocurrency and blockchain technology organization. ... The Energi Core team hails from extremely strong backgrounds in ..."
        canonical="https://www.energi.world/"
      />
      <Layout>
        <Row>
          <Col
            style={{ marginTop: "85px" }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
            align="center"
          >
            <Title
              level={2}
              style={{
                fontSize: "44px",
                color: "#253237",
                textAlign: "center",
                fontWeight: "normal",
              }}
            >
              Cryptocurrency for World of Conciusness
              <br />
              <br />
              Energi a revolutionary cryptocurrency and blockchain technology
              organization
            </Title>
          </Col>
          <Col
            md={{ span: 10, offset: 2 }}
            lg={{ span: 10, offset: 2 }}
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
            align="center"
          >
            <Card
              title="Block Explorer"
              style={{
                height: "480px",
                overflow: "scroll",
                borderRadius: "10px",
              }}
            >
              <Tabs type="card" defaultActiveKey="1">
                <TabPane
                  tab={
                    <>
                      <Row>
                        <Col sm={24} xs={24} md={24} lg={24} align="center">
                          <Image
                            height={40}
                            width={40}
                            src={EthLogo}
                            alt="Ethereum logo"
                          />
                        </Col>
                      </Row>
                      <Row>Ethereum</Row>
                    </>
                  }
                  key="1"
                >
                  <LatestBlocks blockchain="Eth" />
                </TabPane>
                <TabPane
                  tab={
                    <>
                      <Row>
                        <Col sm={24} xs={24} md={24} lg={24} align="center">
                          <Image
                            height={40}
                            width={40}
                            src={PolygonLogo}
                            alt="Polygon logo"
                          />
                        </Col>
                      </Row>
                      <Row>Polygon</Row>
                    </>
                  }
                  key="2"
                >
                  <LatestBlocks blockchain="matic" />
                </TabPane>
                <TabPane
                  tab={
                    <>
                      <Row>
                        <Col sm={24} xs={24} md={24} lg={24} align="center">
                          <Image
                            height={40}
                            width={40}
                            src={BinanceChainLogo}
                            alt="Binance chain logo"
                          />
                        </Col>
                      </Row>
                      <Row>Binance Chain</Row>
                    </>
                  }
                  key="3"
                >
                  <LatestBlocks blockchain="bsc" />
                </TabPane>
                <TabPane
                  tab={
                    <>
                      <Row>
                        <Col sm={24} xs={24} md={24} lg={24} align="center">
                          <Image
                            height={40}
                            width={40}
                            src={AvalancheLogo}
                            alt="Avalanche logo"
                          />
                        </Col>
                      </Row>
                      <Row>Avalanche</Row>
                    </>
                  }
                  key="4"
                >
                  <LatestBlocks blockchain="avalanche" />
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Home;
