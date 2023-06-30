"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanalSchema = void 0;
const mongoose = require("mongoose");
exports.CanalSchema = new mongoose.Schema({
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
}, { timestamps: true });
exports.CanalSchema.index({ nombre: 1 }, { unique: true });
exports.CanalSchema.index({ identificacion: 1 }, { unique: true });
//# sourceMappingURL=canal.schema.js.map