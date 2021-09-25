import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Col, Row, List, Skeleton } from "antd";

import { getLatestBlocksByChain } from "../../api/blockchain";

import { getCryptocurrencyLogo } from "../../helpers";

function LatestTransactions({ blockchain = "Eth" }) {
  const [blocks, setBlocks] = useState([]);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getLatestBlocksByChain(blockchain).then((blocksByChain) => {
      setBlocks(blocksByChain);
      setLoader(false);
    });
  }, [blockchain]);

  return (
    <>
      <Skeleton loading={loader} active avatar paragraph={{ rows: 6 }} round />
      <Row>
        <Col lg={24} md={24} sm={24} xs={24}>
          <List
            itemLayout="horizontal"
            dataSource={blocks}
            renderItem={(block) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Image
                      height={40}
                      width={40}
                      src={getCryptocurrencyLogo(blockchain.toUpperCase())}
                      alt={`Chain logo ${blockchain}`}
                    />
                  }
                  title={
                    <Row>
                      <Col lg={24} md={24} sm={24} xs={24} align="left">
                        <b>Blockchain: </b> {blockchain}
                      </Col>
                    </Row>
                  }
                  description={
                    <>
                      <Row>
                        <Col lg={24} md={24} sm={24} xs={24} align="left">
                          <b>Block:</b> {block.number}
                        </Col>
                      </Row>
                      <Row>
                        <Col Col lg={24} md={24} sm={24} xs={24} align="left">
                          <b>Miner Address:</b> {block.miner}
                        </Col>
                      </Row>
                      <Row>
                        <Col Col lg={24} md={24} sm={24} xs={24} align="left">
                          <b>Transaction count:</b> {block.transactionCount}
                        </Col>
                      </Row>
                      <Row>
                        <Col Col lg={24} md={24} sm={24} xs={24} align="left">
                          <b>Total Difficulty:</b> {block.totalDifficulty}
                        </Col>
                      </Row>
                      <Row>
                        <Col Col lg={24} md={24} sm={24} xs={24} align="left">
                          <b>Transaction per Second (TPS):</b> {block.tps}
                        </Col>
                      </Row>

                      <Row>
                        <Col Col lg={24} md={24} sm={24} xs={24} align="left">
                          <b>Time taken:</b> {block.timeTaken} sec
                        </Col>
                      </Row>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}

export default LatestTransactions;
