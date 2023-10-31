import { Controller, Get } from '@nestjs/common';
import { StoresService } from '../services/stores.service';
import { ApiTags } from '@nestjs/swagger';
import { StoreConfig } from '../models/store-config.model';

@ApiTags('stores')
@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  // @Get('config')
  // async getConfig(): Promise<StoreConfig> {
  //   return this.storesService.getConfig();
  // }
}
