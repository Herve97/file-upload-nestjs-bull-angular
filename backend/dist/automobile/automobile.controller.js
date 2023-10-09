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
exports.AutomobileController = void 0;
const common_1 = require("@nestjs/common");
const automobile_service_1 = require("./automobile.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const bull_1 = require("@nestjs/bull");
let AutomobileController = class AutomobileController {
    constructor(automobileService, fileQueue) {
        this.automobileService = automobileService;
        this.fileQueue = fileQueue;
    }
    uploadCsv(file) {
        this.fileQueue.add('csv', { file });
    }
};
exports.AutomobileController = AutomobileController;
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('csv', {
        storage: (0, multer_1.diskStorage)({
            destination: './csv',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    (0, common_1.Post)('upload'),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutomobileController.prototype, "uploadCsv", null);
exports.AutomobileController = AutomobileController = __decorate([
    (0, common_1.Controller)('api/vehicles'),
    __param(1, (0, bull_1.InjectQueue)('upload-queue')),
    __metadata("design:paramtypes", [automobile_service_1.AutomobileService, Object])
], AutomobileController);
//# sourceMappingURL=automobile.controller.js.map