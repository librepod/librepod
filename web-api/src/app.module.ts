import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstancesModule } from './instances/instances.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'libreadmin',
      password: 'librepassword',
      database: 'librepod',
      entities: ['**/*.entity{.ts,.js}'],
      migrationsTableName: 'migrations',
      migrations: ['src/database/migrations/*.ts'],
      autoLoadEntities: true,
    }),
    StoresModule,
    InstancesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
