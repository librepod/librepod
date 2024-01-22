import { Module } from '@nestjs/common';
import { StoreSourcesController } from './store-sources.controller';
import { StoreSourcesService } from './store-sources.service';
import { KubernetesModule } from 'src/kubernetes/kubernetes.module';

@Module({
  controllers: [StoreSourcesController],
  providers: [StoreSourcesService],
  imports: [KubernetesModule],
})
export class StoreSourcesModule {}
