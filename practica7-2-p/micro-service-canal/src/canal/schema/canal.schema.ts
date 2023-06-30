import * as mongoose from 'mongoose';

export const CanalSchema = new mongoose.Schema(
  {
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
  },
  { timestamps: true },
);

CanalSchema.index({ nombre: 1 }, { unique: true });
CanalSchema.index({ identificacion: 1 }, { unique: true });
