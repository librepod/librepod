import { Outlet } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { DashboardRoute } from "../features/dashboard/routes/DashboardRoute";
import { AppStoreRoute } from "../features/app-store/routes/AppStoreRoute";
import { SettingsRoute } from "../features/settings/routes/SettingsRoute";
import { MyAppsRoute } from "../features/my-apps/routes/AppsRoute";

const App = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/my-apps", element: <MyAppsRoute /> },
      { path: "/dashboard", element: <DashboardRoute /> },
      { path: "/app-store", element: <AppStoreRoute /> },
      { path: "/settings", element: <SettingsRoute /> },
    ],
  },
];
