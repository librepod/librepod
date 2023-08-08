import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresModule } from './stores/stores.module';
import { KubernetesModule } from './kubernetes/kubernetes.module';

@Module({
  imports: [StoresModule, KubernetesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
