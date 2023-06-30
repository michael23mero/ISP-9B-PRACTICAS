"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
const mongoose = require("mongoose");
exports.StudentSchema = new mongoose.Schema({
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    tipo: { type: Number, required: true },
}, { timestamps: true });
exports.StudentSchema.index({ nombre: 1 }, { unique: true });
exports.StudentSchema.index({ identificacion: 1 }, { unique: true });
//# sourceMappingURL=student.schema.js.map