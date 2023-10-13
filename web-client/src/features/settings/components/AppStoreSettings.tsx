import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { AppStoreProvider } from "../../app-store/types/AppStoreProvider";
import { getAppStoreProviderList } from "../../app-store/api/getStoreProviderList";

export const AppStoreSettings = () => {
  const [storeSoureList, setStoreSourceList] = useState(
    Array<AppStoreProvider>
  );

  const getStoreSourceListCallback = useCallback(async () => {
    const providers = await getAppStoreProviderList();
    setStoreSourceList(providers);
  }, []);

  useEffect(() => {
    getStoreSourceListCallback();
  });

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Specification File</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {storeSoureList.map(
            ({ id, name, description, specificationFile }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{specificationFile}</TableCell>
                <TableCell>{description}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Box>
  );
};
