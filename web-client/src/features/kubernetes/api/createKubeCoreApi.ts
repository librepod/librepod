import { CoreV1Api, KubeConfig } from "@kubernetes/client-node";

export const createKubeCoreApi = async (): Promise<CoreV1Api> => {
  const kubeConfig = new KubeConfig();
  kubeConfig.loadFromDefault();
  return kubeConfig.makeApiClient(CoreV1Api);
};
