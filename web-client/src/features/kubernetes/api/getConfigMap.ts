import { V1ConfigMap } from "@kubernetes/client-node";
import { createKubeCoreApi } from "./createKubeCoreApi";

export const getConfigMap = async (name: string): Promise<V1ConfigMap> => {
  const api = await createKubeCoreApi();
  const response = await api.readNamespacedConfigMap(name, "librepod");
  return response.body;
};
