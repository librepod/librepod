import { Controller, Get } from '@nestjs/common';
import { Store } from './entities/store.entity';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  @Get()
  getList(): Promise<Array<Store>> {
    return null;
  }
}
