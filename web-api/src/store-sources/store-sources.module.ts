import { Module } from '@nestjs/common';
import { StoreSourcesController } from './store-sources.controller';
import { StoreSourcesService } from './store-sources.service';

@Module({
  imports: [],
  controllers: [StoreSourcesController],
  providers: [StoreSourcesService],
  exports: [],
})
export class StoreSourcesModule {}
