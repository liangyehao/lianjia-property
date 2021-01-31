import React, { useState } from 'react';
import {Layout,Input,Row,Col,Avatar,Drawer,List,Rate} from 'antd';
import { HomeOutlined,UserOutlined,MessageOutlined } from '@ant-design/icons';

const {Header,Footer} = Layout;
const {Search} = Input;

import styles from './index.less';

const notInLayoutRoute = ['websocket'];


export default function(props:any) {

  const [visible,setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const inLayout = () =>{
    return (
      <>
        <Header className={styles.header}>
          <Row gutter={[8, 16]}>
            <Col span={2}>
              <Avatar
                icon={<HomeOutlined />}
              />
            </Col>
            <Col span={10}>
              <h1 className={styles.h1}>链家-连接每个家的故事</h1>
            </Col>
            <Col span={12}>
              <Row gutter={[16, 16]}>
                <Col span={20}>
                  <Search
                    className={styles.search}
                    placeholder="请输入关键信息开始找房..."
                    enterButton="搜索"
                    size="large"
                    onSearch={()=>{}}
                  />
                </Col>
                <Col span={2}>
                  <Avatar
                    icon={<UserOutlined />}
                  />
                </Col>
                <Col span={1}>
                  <div onClick={()=>{showDrawer()}}>
                    <Avatar
                      icon={<MessageOutlined />}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        { props.children }
        <Footer>footer</Footer>
        <Drawer
          width={400}
          title="联系经纪人"
          placement="right"
          closable={false}
          onClose={()=>{onClose()}}
          visible={visible}
        >
          <List>

            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title='经纪人1'
                description={13119583082}
              />
              <Rate defaultValue={5} allowHalf disabled />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title='经纪人2'
                description={13119583082}
              />
              <Rate defaultValue={2.5} allowHalf disabled />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title='经纪人3'
                description={13119583082}
              />
              <Rate defaultValue={1} allowHalf disabled />
            </List.Item>
          </List>
        </Drawer>
      </>
    )
  };

  const notInLayout = () => {
    return props.children;
  };

  console.log(props)

  const {location:{pathname}} = props;
  const strings = pathname.split("/");

  return notInLayoutRoute.includes(strings[1])?notInLayout():inLayout();
}
