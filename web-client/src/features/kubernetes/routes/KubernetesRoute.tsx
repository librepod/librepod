import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const KubernetesRoute = () => {
  const [configMap, setConfigMap] = useState("");

  return (
    <>
      <Button>Create config map</Button>
      <Button>Delete config map</Button>
      <Button>Show config map</Button>
      <TextField value={configMap}></TextField>
    </>
  );
};
