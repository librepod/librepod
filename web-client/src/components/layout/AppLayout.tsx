import { Box } from "@mui/material";
import { AppHeader } from "./AppHeader";
import { AppSidebar } from "./AppSidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "stretch",
        alignContent: "stretch",
        height: "100vh",
      }}
    >
      <AppHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "stretch",
          alignContent: "stretch",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100hv",
          }}
        >
          <AppSidebar />
        </Box>
        <Box
          sx={{
            height: "100hv",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
