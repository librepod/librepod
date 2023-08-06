import { CoreV1Api, KubeConfig, V1ConfigMap } from '@kubernetes/client-node';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KubernetesService {
  createCoreApi(): CoreV1Api {
    const kubeConfig = new KubeConfig();
    kubeConfig.loadFromDefault();
    return kubeConfig.makeApiClient(CoreV1Api);
  }

  async getConfigMap(name: string, namespace: string): Promise<V1ConfigMap> {
    const api = this.createCoreApi();
    const response = await api.readNamespacedConfigMap(name, namespace);
    return response.body;
  }
}
