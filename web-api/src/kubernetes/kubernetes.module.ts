import { Module } from '@nestjs/common';
import { KubernetesService } from './services/kubernetes.service';

@Module({
  providers: [KubernetesService],
  exports: [KubernetesService],
})
export class KubernetesModule {}
