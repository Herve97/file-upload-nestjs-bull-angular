import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/automobile/entity/vehicle';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'nestjs-fileupload',
      entities: [Vehicle],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
