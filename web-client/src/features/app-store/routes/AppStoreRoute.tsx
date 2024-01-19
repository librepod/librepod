import { Button, Card, Flex } from "antd";

const { Meta } = Card;

export const AppStoreRoute = () => {
  return (
    <Flex wrap="wrap" gap="small">
      {Array.from({ length: 64 }, (_, i) => (
        <Card
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Button key="install" type="primary">
              Install
            </Button>,
            <Button key="details">Details</Button>,
          ]}
        >
          <Meta title="Application" description="Application Description" />
        </Card>
      ))}
    </Flex>
  );
};
