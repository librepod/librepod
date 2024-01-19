import { Layout } from "antd";
import { AppSider } from "./AppSider";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

const { Content } = Layout;

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Layout>
        <AppSider />
        <Layout>
          <Content style={{ padding: 16 }}>{children}</Content>
          <AppFooter />s
        </Layout>
      </Layout>
    </Layout>
  );
};
