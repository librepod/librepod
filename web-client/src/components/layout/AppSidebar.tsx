import { Dashboard, Store, Settings } from "@mui/icons-material";
import {
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export function AppSidebar() {
  return (
    <Paper sx={{ width: 220, maxWidth: "100%" }} square>
      <MenuList>
        <MenuItem component={NavLink} to="/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to="/stores">
          <ListItemIcon>
            <Store />
          </ListItemIcon>
          <ListItemText>Stores</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to="/kubernetes">
          <ListItemIcon>
            <Store />
          </ListItemIcon>
          <ListItemText>Kubernetes</ListItemText>
        </MenuItem>
        <Divider></Divider>
        <MenuItem component={NavLink} to="/settings">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
