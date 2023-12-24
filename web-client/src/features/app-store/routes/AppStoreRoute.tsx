import { EllipsisOutlined } from "@ant-design/icons";
import { Card, Flex } from "antd";

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
          actions={[<EllipsisOutlined rev={undefined} key="ellipsis" />]}
        >
          <Meta title="Application" description="Application Description" />
        </Card>
      ))}
    </Flex>
  );
};
