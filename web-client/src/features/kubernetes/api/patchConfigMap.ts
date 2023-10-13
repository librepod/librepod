import http from "http";
import { createKubeCoreApi } from "./createKubeCoreApi";
import { V1ConfigMap } from "@kubernetes/client-node";

export const patchConfigMap = async (
  name: string,
  body: V1ConfigMap
): Promise<http.IncomingMessage> => {
  const api = await createKubeCoreApi();
  const response = await api.patchNamespacedConfigMap(name, "librepod", body);
  return response.response;
};
