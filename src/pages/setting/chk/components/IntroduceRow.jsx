import { Col, Row } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import { ChartCard } from './Charts';
import Trend from './Trend';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};

function formatInfo(obj) {
  const objStr = JSON.stringify(obj, null, 1);

  if (objStr === undefined) {
    return undefined;
  }
  return objStr.substring(1, objStr.length - 1);
};

const IntroduceRow = ({ loading, visitData }) => (
  <Row gutter={24} type="flex">
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={visitData.msg}
        total={visitData.chk}
        footer={visitData.date}
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          {visitData.services.length}
        </Trend>
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
