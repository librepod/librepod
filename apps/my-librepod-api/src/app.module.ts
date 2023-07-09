import { Module } from '@nestjs/common';
import { AppController, KubeController } from './app.controller';
import { AppService } from './app.service';
import { KubeService } from './kube.service';
import { InstancesModule } from './instances/instances.module';

@Module({
  imports: [InstancesModule],
  controllers: [AppController, KubeController],
  providers: [AppService, KubeService],
})
export class AppModule {}
