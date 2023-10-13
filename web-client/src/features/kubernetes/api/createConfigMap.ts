import { V1ConfigMap } from "@kubernetes/client-node";
import { createKubeCoreApi } from "./createKubeCoreApi";
import http from "http";

export const createConfgiMap = async (
  body: V1ConfigMap
): Promise<http.IncomingMessage> => {
  const api = await createKubeCoreApi();
  const response = await api.createNamespacedConfigMap("librepod", body);
  return response.response;
};
