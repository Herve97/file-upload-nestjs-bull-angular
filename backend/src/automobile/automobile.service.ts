/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entity/vehicle';
import { Repository } from 'typeorm';
//import * as csv from 'csvtojson';

@Injectable()
export class AutomobileService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>,
  ) {}
  async saveFile(file: any): Promise<string[]> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const csv = require('csvtojson');
    const csvFilePath = process.cwd() + '/' + file.path;
    const vehicleArray = csv.fromFile(csvFilePath);

    let vehicles;
    try {
      vehicles = await this.vehicleRepository.save(vehicleArray);
    } catch (error) {
      vehicles = null;
    }
    return vehicles;
  }
}
