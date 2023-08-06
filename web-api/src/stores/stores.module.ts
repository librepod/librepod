import { Module } from '@nestjs/common';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';
import { KubernetesModule } from 'src/kubernetes/kubernetes.module';

@Module({
  imports: [KubernetesModule],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
