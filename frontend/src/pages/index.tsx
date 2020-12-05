import React from 'react';

import {Skeleton,Col,Row,Divider,Card} from 'antd'

const { Meta } = Card;

import styles from './index.less'

import tdhy from "../images/index/tdhy.jpg";



export default () => {
  return (
    <div className={styles.container}>
      <Divider orientation={'center'}>为您推荐</Divider>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="property" src={tdhy} />}
          >
            <Meta title="棠德花园" description="31092元/平" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="property" src={tdhy} />}
          >
            <Meta title="棠德花园" description="31092元/平" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="property" src={tdhy} />}
          >
            <Meta title="棠德花园" description="31092元/平" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="property" src={tdhy} />}
          >
            <Meta title="棠德花园" description="31092元/平" />
          </Card>
        </Col>
      </Row>
      <Divider orientation={'center'}>大家在看</Divider>
      <Row>
        <Skeleton active />
      </Row>
    </div>
  );
}
