import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Carousel, Image, Typography } from 'antd';
import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';

const Welcome: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    margin: '5px',
    color: '#fff',
    textAlign: 'center',
    width: '1645px',
  };
  return (
    <>
      <PageContainer>
        <Card>
          <Alert
            message={'打造最厉害的用户管理'}
            type="success"
            showIcon
            banner
            style={{
              margin: -12,
              marginBottom: 10,
            }}
          />
          <Typography.Title
            level={1}
            style={{
              textAlign: 'center',
            }}
          >
            <SmileTwoTone /> 十二用户中心管理 <HeartTwoTone twoToneColor="#eb2f96" />
          </Typography.Title>
        </Card>
        <Carousel autoplay autoplaySpeed={10000} style={contentStyle}>
          <div>
            <Image
              src={
                'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8f11d5f659e4babad1be4aab185acb6~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d210d1b4c3434e72b2e9711dedcb6cfa~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f927c7f4d52946e0916d6a3542ec3f70~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f0aa687369041d3822d5f28d69e39f8~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14e4ebc30a124d7ca30c41d6e8fd0497~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f4b4b8ff4a84406bfe18f6a27a3e3f8~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e020ad610d3241b69a7cb492a210df03~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5371651be7c74109a685d3d801f73f52~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33d8f1d47ed24eb4b5f6e80f0300f20b~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/435493b0d87443949ffc0ebc6ad3fd4d~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
          <div>
            <Image
              src={
                'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8b809c804414e2d86677b1952092d52~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?'
              }
            />
          </div>
        </Carousel>
      </PageContainer>
    </>
  );
};
export default Welcome;
