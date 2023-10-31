import { Module } from '@nestjs/common';
import { KubernetesService } from './services/kubernetes.service';
import { KubernetesController } from './controllers/kubernetes.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [KubernetesService],
  exports: [KubernetesService],
  controllers: [KubernetesController],
})
export class KubernetesModule {}
