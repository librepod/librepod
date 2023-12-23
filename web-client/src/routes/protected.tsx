import { Outlet } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { DashboardRoute } from "../features/dashboard/routes/DashboardRoute";
import { StoresRoute } from "../features/app-store/routes/StoresRoute";
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
      { path: "/app-store", element: <StoresRoute /> },
      { path: "/settings", element: <SettingsRoute /> },
    ],
  },
];
