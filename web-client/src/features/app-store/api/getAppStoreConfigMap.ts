import { getConfigMap } from "../../kubernetes/api/getConfigMap";
import { V1ConfigMap } from "@kubernetes/client-node";

export const getAppStoreConfigMap = async (): Promise<V1ConfigMap> => {
  return await getConfigMap("librepod-store-config");
};
