import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomobileModule } from './automobile/automobile.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AutomobileModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
