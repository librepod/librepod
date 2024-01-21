import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { StoreSourceCreateDto } from './dtos/store-source-create.dto';
import { StoreSourceInfoDto } from './dtos/store-source-info.dto';
import { StoreSourceUpdateDto } from './dtos/store-source-update.dto';
import { StoreSourceEntity } from './entities/store-source.entity';

@Injectable()
export class StoreSourcesService {
  private storeSources: StoreSourceEntity[];

  constructor() {
    this.storeSources = [];
  }

  async create(storeSourceCreateDto: StoreSourceCreateDto): Promise<string> {
    const storeSource = {
      id: uuid(),
      ...storeSourceCreateDto,
    };

    this.storeSources = [storeSource, ...this.storeSources];

    return storeSource.id;
  }

  async getList(): Promise<StoreSourceInfoDto[]> {
    return this.storeSources.map((x) => {
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
