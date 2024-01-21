import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KubernetesModule } from './kubernetes/kubernetes.module';
import { StoreSourcesModule } from './store-sources/store-sources.module';

@Module({
  imports: [StoreSourcesModule, KubernetesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
