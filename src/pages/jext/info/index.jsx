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
      this.timer = window.setInterval(() => {
        const { dispatch } = this.props;
        dispatch({
          type: 'jext/info',
        });
      }, 1000 * 60);
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

  render() {
    const { jext, loading } = this.props;
    console.log("render", jext);

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
