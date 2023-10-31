import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppStoreModule } from './app-store/app-store.module';
import { KubernetesModule } from './kubernetes/kubernetes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AppStoreModule, KubernetesModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
