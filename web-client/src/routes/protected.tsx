import { Outlet } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { DashboardRoute } from "../features/dashboard/routes/DashboardRoute";
import { StoresRoute } from "../features/stores/routes/StoresRoute";
import { SettingsRoute } from "../features/settings/routes/SettingsRoute";
import { AppsRoute } from "../features/apps/routes/AppsRoute";
import { KubernetesRoute } from "../features/kubernetes/routes/KubernetesRoute";

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
      { path: "/apps", element: <AppsRoute /> },
      { path: "/dashboard", element: <DashboardRoute /> },
      { path: "/stores", element: <StoresRoute /> },
      { path: "/settings", element: <SettingsRoute /> },
      { path: "/kubernetes", element: <KubernetesRoute /> },
    ],
  },
];
