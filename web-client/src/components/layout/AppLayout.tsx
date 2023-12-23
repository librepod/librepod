import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

const { Header, Content, Footer, Sider } = Layout;

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline"></Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "stretch",
    //     justifyContent: "stretch",
    //     alignContent: "stretch",
    //     height: "100vh",
    //   }}
    // >
    //   <AppHeader />
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "stretch",
    //       justifyContent: "stretch",
    //       alignContent: "stretch",
    //       height: "100vh",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: "flex",
    //         height: "100hv",
    //       }}
    //     >
    //       <AppSidebar />
    //     </Box>
    //     <Box
    //       sx={{
    //         height: "100hv",
    //       }}
    //     >
    //       {children}
    //     </Box>
    //   </Box>
    // </Box>
  );
};
