"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const typeorm_1 = require("@nestjs/typeorm");
const vehicle_1 = require("./entity/vehicle");
const typeorm_2 = require("typeorm");
let UploadProcessor = class UploadProcessor {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    async handleCsvFiles(job) {
        const csv = require('csvtojson');
        const csvFilePath = process.cwd() + '/' + job.data.file.path;
        const vehicleArray = await csv().fromFile(csvFilePath);
        await this.vehicleRepository.save(vehicleArray);
    }
};
exports.UploadProcessor = UploadProcessor;
__decorate([
    (0, bull_1.Process)('csv'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadProcessor.prototype, "handleCsvFiles", null);
exports.UploadProcessor = UploadProcessor = __decorate([
    (0, bull_1.Processor)('upload-queue'),
    __param(0, (0, typeorm_1.InjectRepository)(vehicle_1.Vehicle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UploadProcessor);
//# sourceMappingURL=upload.processor.js.map