import { Module } from '@nestjs/common';
import { StoresController } from './controllers/stores.controller';
import { StoresService } from './services/stores.service';
import { KubernetesModule } from 'src/kubernetes/kubernetes.module';

@Module({
  imports: [KubernetesModule],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
