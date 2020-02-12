import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import PageLoading from './components/PageLoading';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));

class Check extends Component {
  state = {};

  timer = undefined;
  reqRef = undefined;

  componentDidMount() {
    this.reqRef = requestAnimationFrame(() => {
      this.getInfo();
      this.timer = window.setInterval(() => this.getInfo(), 1000 * 60);
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'setting/clear',
    });

    clearInterval(this.timer);
    cancelAnimationFrame(this.reqRef);
  }

  getInfo() {
    const { dispatch } = this.props;
    dispatch({
      type: 'setting/chk',
    });
  }

  render() {
    const { setting, loading } = this.props;

    return (
      <GridContent>
        <React.Fragment>
          <Suspense fallback={<PageLoading />}>
            <IntroduceRow loading={loading} visitData={setting} />
          </Suspense>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default connect(({ setting, loading }) => ({
  setting,
  loading: loading.effects['setting/chk'],
}))(Check);
