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
exports.AutomobileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vehicle_1 = require("./entity/vehicle");
const typeorm_2 = require("typeorm");
let AutomobileService = class AutomobileService {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    async saveFile(file) {
        const csv = require('csvtojson');
        const csvFilePath = process.cwd() + '/' + file.path;
        const vehicleArray = csv.fromFile(csvFilePath);
        let vehicles;
        try {
            vehicles = await this.vehicleRepository.save(vehicleArray);
        }
        catch (error) {
            vehicles = null;
        }
        return vehicles;
    }
};
exports.AutomobileService = AutomobileService;
exports.AutomobileService = AutomobileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vehicle_1.Vehicle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AutomobileService);
//# sourceMappingURL=automobile.service.js.map