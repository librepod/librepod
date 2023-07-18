import { AppBar, Toolbar, Typography } from "@mui/material";

export function AppHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">LibrePod</Typography>
      </Toolbar>
    </AppBar>
  );
}
