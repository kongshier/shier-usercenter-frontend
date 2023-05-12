import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="你访问的界面已经飞走了"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        首页
      </Button>
    }
  />
);

export default NoFoundPage;
