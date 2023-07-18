import { Injectable } from '@nestjs/common';
import { Store } from './entities/store.entity';

@Injectable()
export class StoresService {
  private readonly stores: Array<Store> = [
    {
      id: '',
      name: 'LibrePod',
      specificationFilePath: '',
    },
  ];

  getAll(): Promise<Array<Store>> {
    return Promise.resolve(this.stores);
  }
}
