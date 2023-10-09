import { AutomobileService } from './automobile.service';
import { Queue } from 'bull';
export declare class AutomobileController {
    private readonly automobileService;
    private fileQueue;
    constructor(automobileService: AutomobileService, fileQueue: Queue);
    uploadCsv(file: any): void;
}
