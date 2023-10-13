import { Box, Grid } from "@mui/material";
import { Store } from "../types/Store";
import { useEffect, useState } from "react";
import { StoreCard } from "../components/StoreCard";
import { nanoid } from "nanoid";

export const StoresRoute = () => {
  const [stores, setStores] = useState(Array<Store>);

  useEffect(() => {
    setStores([
      {
        id: nanoid(),
        name: "Store",
        description:
          "It is description It is description It is description It is description It is description It is description It is description",
        icon: "",
        specificationFile: "",
      },
      {
        id: nanoid(),
        name: "Store",
        description:
          "It is description It is description It is description It is description It is description It is description It is description",
        icon: "",
        specificationFile: "",
      },
      {
        id: nanoid(),
        name: "Store",
        description:
          "It is description It is description It is description It is description It is description It is description It is description",
        icon: "",
        specificationFile: "",
      },
      {
        id: nanoid(),
        name: "Store",
        description:
          "It is description It is description It is description It is description It is description It is description It is description",
        icon: "",
        specificationFile: "",
      },
      {
        id: nanoid(),
        name: "Store",
        description:
          "It is description It is description It is description It is description It is description It is description It is description",
        icon: "",
        specificationFile: "",
      },
    ]);
  }, []);

  return (
    <Grid container spacing={1} margin={1} padding={1} justifyItems={"center"}>
      {stores.map(({ id, name, description, icon }) => (
        <Box margin={1}>
          <StoreCard
            key={id}
            id={id}
            name={name}
            description={description}
            icon={icon}
          />
        </Box>
      ))}
    </Grid>
  );
};
