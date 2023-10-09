"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomobileModule = void 0;
const common_1 = require("@nestjs/common");
const automobile_controller_1 = require("./automobile.controller");
const automobile_service_1 = require("./automobile.service");
const typeorm_1 = require("@nestjs/typeorm");
const vehicle_1 = require("./entity/vehicle");
const bull_1 = require("@nestjs/bull");
let AutomobileModule = class AutomobileModule {
};
exports.AutomobileModule = AutomobileModule;
exports.AutomobileModule = AutomobileModule = __decorate([
    (0, common_1.Module)({
        controllers: [automobile_controller_1.AutomobileController],
        providers: [automobile_service_1.AutomobileService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([vehicle_1.Vehicle]),
            bull_1.BullModule.forRoot({
                redis: {
                    host: 'localhost',
                    port: 6379,
                },
            }),
            bull_1.BullModule.registerQueue({ name: 'upload-queue' }),
        ],
    })
], AutomobileModule);
//# sourceMappingURL=automobile.module.js.map