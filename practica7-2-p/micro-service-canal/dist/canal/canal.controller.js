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
exports.CanalController = void 0;
const canal_service_1 = require("./canal.service");
const canal_dto_1 = require("./dto/canal.dto");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const constants_1 = require("../common/constants");
let CanalController = class CanalController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    create(studentDTO) {
        return this.studentService.create(studentDTO);
    }
    findAll() {
        return this.studentService.findAll();
    }
    findOne(id) {
        return this.studentService.findOne(id);
    }
    update(payload) {
        return this.studentService.update(payload.id, payload.studentDTO);
    }
    delete(id) {
        return this.studentService.delete(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.CanalMsg.CREATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [canal_dto_1.CanalDTO]),
    __metadata("design:returntype", void 0)
], CanalController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.CanalMsg.FIND_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CanalController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.CanalMsg.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CanalController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.CanalMsg.UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CanalController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.CanalMsg.DELETE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CanalController.prototype, "delete", null);
CanalController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [canal_service_1.CanalService])
], CanalController);
exports.CanalController = CanalController;
//# sourceMappingURL=canal.controller.js.map