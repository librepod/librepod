import { createKubeCoreApi } from "./createKubeCoreApi";
import http from "http";

export const deleteConfigMap = async (
  name: string
): Promise<http.IncomingMessage> => {
  const api = await createKubeCoreApi();
  const response = await api.deleteNamespacedConfigMap(name, "librepod");
  return response.response;
};
