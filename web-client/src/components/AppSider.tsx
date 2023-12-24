import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

type AppSiderProps = {};

export const AppSider: React.FC<AppSiderProps> = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item>
          <DashboardOutlined rev={undefined} />
          <span>Dashboard</span>
          <Link to="dashboard" />
        </Menu.Item>
        <Menu.Item>
          <DashboardOutlined rev={undefined} />
          <span>My Apps</span>
          <Link to="my-apps" />
        </Menu.Item>
        <Menu.Item>
          <DashboardOutlined rev={undefined} />
          <span>App Store</span>
          <Link to="app-store" />
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item>
          <DashboardOutlined rev={undefined} />
          <span>Settings</span>
          <Link to="settings" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
