import { CoreV1Api, KubeConfig, V1ConfigMap } from '@kubernetes/client-node';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KubernetesService {
  constructor(private configService: ConfigService) {}

  get namespace(): string {
    return this.configService.get<string>('KUBERNETES_NAMESPACE');
  }

  get configMapName(): string {
    return this.configService.get<string>('KUBERNETES_CONFIGMAP_NAME');
  }

  /**
   * Creates a new instance of the CoreV1Api class.
   *
   * @return {CoreV1Api} A new instance of the CoreV1Api class.
   */
  private createCoreApi(): CoreV1Api {
    const kubeConfig = new KubeConfig();
    kubeConfig.loadFromDefault();
    return kubeConfig.makeApiClient(CoreV1Api);
  }

  async createConfigMap(data?: { [key: string]: string }): Promise<void> {
    const api = this.createCoreApi();
    const body = {
      metadata: {
        name: this.configMapName,
        namespace: this.namespace,
      },
      data: data,
    };
    await api.createNamespacedConfigMap(this.namespace, body);
  }

  async getConfigMap(): Promise<V1ConfigMap> {
    const api = this.createCoreApi();
    const response = await api.readNamespacedConfigMap(this.configMapName, this.namespace);
    return response.body;
  }

  async patchConfigMapData(data: { [key: string]: string }): Promise<void> {
    const headers = { 'content-type': 'application/strategic-merge-patch+json' };
    const api = this.createCoreApi();
    await api.patchNamespacedConfigMap(this.configMapName, this.namespace, { data }, undefined, undefined, undefined, undefined, undefined, { headers });
  }

  async deleteConfigMap(): Promise<void> {
    const api = this.createCoreApi();
    await api.deleteNamespacedConfigMap(this.configMapName, this.namespace);
  }
}
