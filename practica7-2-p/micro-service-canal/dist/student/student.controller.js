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
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
const student_dto_1 = require("./dto/student.dto");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const constants_1 = require("../common/constants");
let StudentController = class StudentController {
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
    (0, microservices_1.MessagePattern)(constants_1.StudentMsg.CREATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.StudentDTO]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.StudentMsg.FIND_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.StudentMsg.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.StudentMsg.UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.StudentMsg.DELETE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "delete", null);
StudentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map