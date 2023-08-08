import { Injectable, NotImplementedException } from '@nestjs/common';
import { Store } from '../models/store.model';
import { UpdateStoreDto } from '../dto/update-store.dto';
import { CreateStoreDto } from '../dto/create-store.dto';
import { KubeConfig, CoreV1Api } from '@kubernetes/client-node';
import { KubernetesService } from 'src/kubernetes/kubernetes.service';
import { JsonSerializer } from 'typescript-json-serializer';
import { StoresOptions } from '../options/stores.options';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StoresService {
  constructor(private kubernetesService: KubernetesService) {}

  async getOptions(): Promise<StoresOptions> {
    const configMap = await this.kubernetesService.getConfigMap('librepod-config', 'librepod');
    const storesSection = configMap.data['stores.json'];
    const options = new JsonSerializer().deserializeObject(storesSection, StoresOptions);
    return options;
  }

  async updateOptions(options: StoresOptions): Promise<void> {
    const kc = new KubeConfig();
    kc.loadFromDefault();
    const api = kc.makeApiClient(CoreV1Api);
    const patch = [{ op: 'replace', path: '/data/stores.json', value: JSON.stringify(options, null, 2) }];
    const headers = { 'content-type': 'application/json-patch+json' };
    await api.patchNamespacedConfigMap('librepod-config', 'librepod', patch, undefined, undefined, undefined, undefined, undefined, { headers });
  }

  async getAll(): Promise<Array<Store>> {
    const storesOptions = await this.getOptions();
    return storesOptions.items;
  }

  async create(storeDto: CreateStoreDto): Promise<Store> {
    // const kc = new KubeConfig();
    // kc.loadFromDefault();
    // const api = kc.makeApiClient(CoreV1Api);
    const options = await this.getOptions();
    const newStore = { id: uuidv4(), name: storeDto.name, specificationFilePath: storeDto.specificationFilePath };
    const newOptions = {
      ...options,
      items: [...options.items, newStore],
    };
    await this.updateOptions(newOptions);
    // const patch = [{ op: 'replace', path: '/data/stores.json', value: JSON.stringify(newOptions, null, 2) }];
    // const headers = { 'content-type': 'application/json-patch+json' };
    // await api.patchNamespacedConfigMap('librepod-config', 'librepod', patch, undefined, undefined, undefined, undefined, undefined, { headers });
    return newStore;
  }

  async update(id: string, storeDto: UpdateStoreDto): Promise<void> {
    // const api = await this.kubernetesService.createCoreApi();

    const kc = new KubeConfig();
    kc.loadFromDefault();

    const api = kc.makeApiClient(CoreV1Api);

    const namespaces = await api.listNamespace();
    // const configMap = await api.listNamespacedConfigMap('librepod');
    const ts = await api.readNamespacedConfigMap('librepod-config', 'librepod');

    // const a = ts.body.data;

    const a = {};
    const patch = [{ op: 'replace', path: '/data/foo', value: 'new-value-1' }];

    const headers1 = { 'content-type': 'application/strategic-merge-patch+json' };
    const headers2 = { 'content-type': 'application/json-patch+json' };

    const response = await api.patchNamespacedConfigMap('librepod-config', 'librepod', patch, undefined, undefined, undefined, undefined, undefined, { headers: headers2 });
    // await api.patchNamespacedConfigMap('librepod-config', 'librepod', new V1Patch());

    // return this.storesRepository.save(storeDto);
    throw new NotImplementedException();
  }

  async delete(id: string): Promise<void> {
    // await this.storesRepository.delete({ id });
    throw new NotImplementedException();
  }
}
