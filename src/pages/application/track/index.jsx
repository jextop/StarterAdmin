import { Button, Card, Icon, List, Typography } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';

const { Paragraph } = Typography;

class Check extends Component {
  timer = undefined;
  reqRef = undefined;

  componentDidMount() {
    this.reqRef = requestAnimationFrame(() => {
      this.getInfo();
      this.timer = window.setInterval(() => this.getInfo(), 1000);
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'application/clear',
    });

    clearInterval(this.timer);
    cancelAnimationFrame(this.reqRef);
  }

  getInfo() {
    const { dispatch } = this.props;
    dispatch({
      type: 'application/track',
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
            dataSource={application.msgList}
            renderItem={item => {
              return (
                <List.Item key={item.chk}>
                  <Card
                    hoverable
                    className={styles.card}
                  >
                    <Card.Meta
                      avatar={item.chk}
                      title={formatArr([item.msg])}
                      description={
                        <Paragraph
                          className={styles.item}
                          ellipsis={{
                            rows: 3,
                          }}
                        >
                          {item.text}
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
