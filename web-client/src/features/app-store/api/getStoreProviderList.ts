import { AppStoreProvider } from "../types/AppStoreProvider";
import { getAppStoreConfigMap } from "./getAppStoreConfigMap";

export const getAppStoreProviderList = async (): Promise<
  Array<AppStoreProvider>
> => {
  const configMap = await getAppStoreConfigMap();

  if (configMap) {
    return [];
  }

  return [];
};
