import { Injectable } from '@nestjs/common';
import { KubernetesService } from 'src/kubernetes/services/kubernetes.service';
import { StoreConfig } from '../models/store-config.model';

@Injectable()
export class StoresService {
  constructor(private readonly kubernetesService: KubernetesService) {}

  async createConfig(body: StoreConfig): Promise<void> {
    await this.kubernetesService.patchConfigMapData({ 'app-store': JSON.stringify(body) });
  }

  async getConfig(): Promise<StoreConfig> {
    const response = await this.kubernetesService.getConfigMap('librepod-config');
    const storeData = response.data['store'];
    return JSON.parse(storeData);
  }

  async updateConfig(body: StoreConfig): Promise<void> {
    const configMap = await this.kubernetesService.getConfigMap('librepod-config');
    configMap.data['store'] = JSON.stringify(body);
    await this.kubernetesService.updateConfigMap(configMap, 'librepod-config');
  }

  async deleteConfig(): Promise<void> {
    const configMap = await this.kubernetesService.getConfigMap('librepod-config');
    configMap.data['store'] = '';
    await this.kubernetesService.updateConfigMap(configMap, 'librepod-config');
  }
}
