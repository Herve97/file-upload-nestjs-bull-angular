import { Vehicle } from "./entity/vehicle";
import { Repository } from "typeorm";
import { Job } from "bull";
export declare class UploadProcessor {
    private vehicleRepository;
    constructor(vehicleRepository: Repository<Vehicle>);
    handleCsvFiles(job: Job): Promise<void>;
}
