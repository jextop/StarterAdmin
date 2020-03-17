import { Button, Card, Icon, List, Typography } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';
import { getSocketUrl } from '@/utils/settings';

const { Paragraph } = Typography;

class Check extends Component {
  timer = undefined;
  reqRef = undefined;
  socket = undefined;

  componentDidMount() {
    this.reqRef = requestAnimationFrame(() => {
      this.connectSocket();
      this.timer = window.setInterval(() => this.connectSocket(), 1000 * 10);
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'application/clear',
    });

    clearInterval(this.timer);
    this.closeSocket();
    cancelAnimationFrame(this.reqRef);
  }

  connectSocket() {
    if (this.socket !== undefined) {
      return;
    }

    // 建立WebSocket连接
    this.socket = new WebSocket(getSocketUrl() + "track");

    this.socket.onmessage = msg => {
      const msgMap = JSON.parse(msg.data);
      console.log("收到数据", msgMap);
      this.socketInfo(msgMap)
    };

    this.socket.onopen = () => {
      console.log("WebSocket连接成功");
    };

    this.socket.onclose = () => {
      console.log("WebSocket关闭连接s");
      this.socket = undefined;
    };
  }

  closeSocket() {
    if (this.socket !== undefined) {
      this.socket.close();
      this.socket = undefined;
    }
  }

  socketInfo(msg) {
    const { dispatch } = this.props;
    dispatch({
      type: 'application/track',
      payload: msg,
    });
  }

  render() {
    const { application, loading } = this.props;

    function formatArr(objArr) {
      let arr = []
      for (const i in objArr) {
        const obj = objArr[i]
        if (obj !== undefined) {
          arr.push(obj)
        }
      }

      const objStr = JSON.stringify(arr, null, 1);
      if (objStr === undefined) {
        return undefined;
      }
      return objStr.substring(1, objStr.length - 1);
    };

    return (
      <PageHeaderWrapper >
        <div className={styles.cardList}>
          <List
            rowKey="chk"
            loading={loading}
            grid={{
              gutter: 24,
              lg: 3,
              md: 2,
              sm: 1,
              xs: 1,
            }}
            dataSource={application.items}
            renderItem={item => {
              return (
                <List.Item key={item.uid}>
                  <Card
                    hoverable
                    className={styles.card}
                  >
                    <Card.Meta
                      avatar={item.uid}
                      title={formatArr([item.ip])}
                      description={
                        <Paragraph
                          className={styles.item}
                          ellipsis={{
                            rows: 3,
                          }}
                        >
                          {item.addr}
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }}
          />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default connect(({ application, loading }) => ({
  application,
  loading: loading.models.application,
}))(Check);
