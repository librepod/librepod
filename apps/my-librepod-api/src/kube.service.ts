import { Injectable } from '@nestjs/common'
import { CoreV1Api, CustomObjectsApi, KubeConfig } from '@kubernetes/client-node'

@Injectable()
export class KubeService {
  private readonly coreApi: CoreV1Api
  private readonly coApi: CustomObjectsApi

  constructor() {
    const kubeConfig = new KubeConfig()
    kubeConfig.loadFromDefault()

    const k8sCoreApi = kubeConfig.makeApiClient(CoreV1Api)
    const k8sCOApi = kubeConfig.makeApiClient(CustomObjectsApi)
    this.coreApi = k8sCoreApi
    this.coApi = k8sCOApi
  }

  async getAllPods(): Promise<any> {
    const pods = await this.coreApi.listNamespacedPod('default')
    return pods.body
  }

  // See here for Custom Objects API details
  // https://github.com/kubernetes-client/javascript/blob/master/src/gen/api/customObjectsApi.ts
  async listHelmCharts(): Promise<any> {
    try {
      const res = await this.coApi.listNamespacedCustomObject(
        'helm.cattle.io',
        'v1',
        'default', // use empty string to get from all namespaces
        'helmcharts',
      );
      return res.body
    } catch (error) {
      console.error('Error fetching CRD instances:', error);
      throw error;
    }
  }

  async createHelmChartObject(): Promise<any> {
    try {
      const baikal = {
        apiVersion: 'helm.cattle.io/v1',
        kind: 'HelmChart',
        metadata: {
          name: 'baikal',
          namespace: 'default'
        },
        spec: {
          repo: 'https://librepod.github.io/charts',
          chart: 'baikal',
          version: '1.1.0',
          targetNamespace: 'default',
          valuesContent: `
            controller:
              replicas: 1
          `
        }
      }

      const res = await this.coApi.createNamespacedCustomObject(
        'helm.cattle.io',
        'v1',
        'default',
        'helmcharts',
        baikal
      )
      console.log(res.body)
      return res.body
    } catch (error) {
      console.error('Error creating CRD instances:', error);
      throw error;
    }
  }
}
