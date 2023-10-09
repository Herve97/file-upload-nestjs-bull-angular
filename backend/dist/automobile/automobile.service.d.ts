import { Vehicle } from './entity/vehicle';
import { Repository } from 'typeorm';
export declare class AutomobileService {
    private vehicleRepository;
    constructor(vehicleRepository: Repository<Vehicle>);
    saveFile(file: any): Promise<string[]>;
}
