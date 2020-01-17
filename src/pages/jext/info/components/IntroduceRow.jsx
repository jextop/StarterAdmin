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

const IntroduceRow = ({ loading, visitData }) => (
  <Row gutter={24} type="flex">
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="jext.info.course" defaultMessage="Course"/>
        }
        total={JSON.stringify(visitData.course.count)}
        footer={JSON.stringify(visitData.course.user)}
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          {JSON.stringify(visitData.course.userCount)}
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="jext.info.blog" defaultMessage="Blog" />
        }
        total={JSON.stringify(visitData.blog.count)}
        footer={JSON.stringify(visitData.blog.reader)}
        contentHeight={46}
      >
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
