import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import PageLoading from './components/PageLoading';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));

class JextInfo extends Component {
  state = {};

  reqRef = 0;
  timeoutId = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'jext/info',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'jext/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
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
