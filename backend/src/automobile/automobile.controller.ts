/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AutomobileService } from './automobile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('api/vehicles')
export class AutomobileController {
  constructor(
    private readonly automobileService: AutomobileService,
    @InjectQueue('upload-queue') private fileQueue: Queue,
  ) {}

  @UseInterceptors(
    FileInterceptor('csv', {
      storage: diskStorage({
        destination: './csv',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @Post('upload')
  uploadCsv(@UploadedFile() file) {
    //this.automobileService.saveFile(file);
    this.fileQueue.add('csv', { file });
  }
}
