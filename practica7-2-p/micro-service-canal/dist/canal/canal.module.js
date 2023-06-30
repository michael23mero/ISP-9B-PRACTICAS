"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanalModule = void 0;
const common_1 = require("@nestjs/common");
const canal_service_1 = require("./canal.service");
const canal_schema_1 = require("./schema/canal.schema");
const models_1 = require("../common/models/models");
const mongoose_1 = require("@nestjs/mongoose");
const canal_controller_1 = require("./canal.controller");
let CanalModule = class CanalModule {
};
CanalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: models_1.CANAL.name,
                    useFactory: () => canal_schema_1.CanalSchema,
                },
            ]),
        ],
        controllers: [canal_controller_1.CanalController],
        providers: [canal_service_1.CanalService],
    })
], CanalModule);
exports.CanalModule = CanalModule;
//# sourceMappingURL=canal.module.js.map