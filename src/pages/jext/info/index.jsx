import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import PageLoading from './components/PageLoading';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));

class JextInfo extends Component {
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
      type: 'jext/clear',
    });

    clearInterval(this.timer);
    cancelAnimationFrame(this.reqRef);
  }

  getInfo() {
    const { dispatch } = this.props;
    dispatch({
      type: 'jext/info',
    });
  }

  render() {
    const { jext, loading } = this.props;

    return (
      <GridContent>
        <React.Fragment>
          <Suspense fallback={<PageLoading />}>
            <IntroduceRow loading={loading} visitData={jext} />
          </Suspense>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default connect(({ jext, loading }) => ({
  jext,
  loading: loading.effects['jext/info'],
}))(JextInfo);
