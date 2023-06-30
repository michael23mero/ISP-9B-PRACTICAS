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
exports.CanalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const models_1 = require("../common/models/models");
let CanalService = class CanalService {
    constructor(model) {
        this.model = model;
    }
    async create(studentDTO) {
        const newStudent = new this.model(studentDTO);
        return await newStudent.save();
    }
    async findAll() {
        return await this.model.find();
    }
    async findOne(id) {
        return await this.model.findById(id);
    }
    async update(id, studentDTO) {
        return await this.model.findByIdAndUpdate(id, studentDTO, { new: true });
    }
    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return {
            status: common_1.HttpStatus.OK,
            msg: 'Deleted',
        };
    }
};
CanalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(models_1.CANAL.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CanalService);
exports.CanalService = CanalService;
//# sourceMappingURL=canal.service.js.map