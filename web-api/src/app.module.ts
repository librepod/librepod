import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstancesModule } from './instances/instances.module';

@Module({
  imports: [InstancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
