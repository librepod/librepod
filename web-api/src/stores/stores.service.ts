import { Injectable } from '@nestjs/common';
import { Store } from './entities/store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateStoreDto } from './dto/update-store.dto';
import { CreateStoreDto } from './dto/create-store.dto';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storesRepository: Repository<Store>,
  ) {}

  find(): Promise<Array<Store>> {
    return this.storesRepository.find();
  }

  findOne(id: string): Promise<Store | null> {
    return this.storesRepository.findOneBy({ id });
  }

  create(storeDto: CreateStoreDto): Promise<Store> {
    return this.storesRepository.save(storeDto);
  }

  async update(id: string, storeDto: UpdateStoreDto): Promise<void> {
    await this.storesRepository.update({ id }, storeDto);
  }

  async delete(id: string): Promise<void> {
    await this.storesRepository.delete({ id });
  }
}
