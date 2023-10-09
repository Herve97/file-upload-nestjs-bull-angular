/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

import { Process, Processor } from "@nestjs/bull";
import { InjectRepository } from "@nestjs/typeorm";
import { Vehicle } from "./entity/vehicle";
import { Repository } from "typeorm";
import { Job } from "bull";

@Processor('upload-queue')
export class UploadProcessor{
  constructor(@InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>) { }
  
  @Process('csv')
  async handleCsvFiles(job: Job){
    const csv = require('csvtojson');
    const csvFilePath = process.cwd() + '/' + job.data.file.path;
    const vehicleArray = await csv().fromFile(csvFilePath);

    await this.vehicleRepository.save(vehicleArray);
  }
}