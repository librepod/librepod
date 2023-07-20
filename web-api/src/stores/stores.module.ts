import { Module } from '@nestjs/common';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';
import { Store } from './entities/store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
