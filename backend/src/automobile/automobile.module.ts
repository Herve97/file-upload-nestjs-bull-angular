import { Module } from '@nestjs/common';
import { AutomobileController } from './automobile.controller';
import { AutomobileService } from './automobile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entity/vehicle';
import { BullModule } from '@nestjs/bull';

@Module({
  controllers: [AutomobileController],
  providers: [AutomobileService],
  imports: [
    TypeOrmModule.forFeature([Vehicle]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({ name: 'upload-queue' }),
  ],
})
export class AutomobileModule {}
