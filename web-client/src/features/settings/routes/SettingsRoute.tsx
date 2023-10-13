import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
// import { AppStoreSettings } from "../components/AppStoreSettings";

export const SettingsRoute = () => {
  const [value, setValue] = useState("store");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <TabList onChange={handleTabChange}>
          <Tab label="Store" value="store"></Tab>
        </TabList>
        <TabPanel value="store">{/* <AppStoreSettings /> */}</TabPanel>
      </TabContext>
    </Box>
  );
};
