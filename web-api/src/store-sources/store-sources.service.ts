import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { StoreSourceCreateDto } from './dtos/store-source-create.dto';
import { StoreSourceInfoDto } from './dtos/store-source-info.dto';
import { StoreSourceUpdateDto } from './dtos/store-source-update.dto';
import { StoreSourceEntity } from './entities/store-source.entity';
import { KubernetesService } from 'src/kubernetes/kubernetes.service';
import { JsonSerializer } from 'typescript-json-serializer';

@Injectable()
export class StoreSourcesService {
  private storeSources: StoreSourceEntity[];

  constructor(private readonly kubernetesService: KubernetesService) {
    this.storeSources = [];
  }

  private async getEntities() {
    const configMap = await this.kubernetesService.getConfigMap('store-source', 'librepod');
    if (!configMap.data) {
      return [];
    }
    const itemsSection = configMap.data['items'];
    if (!itemsSection) {
      return [];
    }
    const storeSources = new JsonSerializer().deserializeObject(itemsSection, Array<StoreSourceEntity>);
    return storeSources;
  }

  private async initialize() {
    const api = this.kubernetesService.createCoreApi();
    await api.createNamespacedConfigMap('librepod', {
      metadata: {
        name: 'store-source',
        namespace: 'librepod',
      },
      data: {
        items: '',
      },
    });
  }

  async create(storeSourceCreateDto: StoreSourceCreateDto): Promise<string> {
    const storeSources = await this.getList();
    const storeSource = {
      id: uuid(),
      ...storeSourceCreateDto,
    };

    const api = this.kubernetesService.createCoreApi();

    const updatedList = [...storeSources, storeSource];
    const storeSourceOptionsData = JSON.stringify(updatedList, null, 2);
    const patch = [{ op: 'add', path: '/data/items', value: storeSourceOptionsData }];

    const headers = { 'content-type': 'application/json-patch+json' };

    await api.patchNamespacedConfigMap('store-source', 'librepod', patch, undefined, undefined, undefined, undefined, undefined, { headers });

    return storeSource.id;
  }

  async getList(): Promise<StoreSourceInfoDto[]> {
    const configMap = await this.kubernetesService.getConfigMap('store-source', 'librepod');
    if (!configMap.data) {
      return [];
    }
    const itemsSection = configMap.data['items'];
    if (!itemsSection) {
      return [];
    }
    const storeSources = JSON.parse(itemsSection) as Array<StoreSourceEntity>;
    return storeSources.map((x) => {
      return {
        id: x.id,
        name: x.name,
        specificationPath: x.specificationPath,
      };
    });
  }

  async update(id: string, storeSourceData: StoreSourceUpdateDto): Promise<void> {
    this.storeSources = this.storeSources.map((storeSource) => (storeSource.id === id ? { ...storeSource, ...storeSourceData } : storeSource));
  }

  async delete(id: string): Promise<void> {
    this.storeSources = this.storeSources.filter((store) => store.id !== id);
  }
}
