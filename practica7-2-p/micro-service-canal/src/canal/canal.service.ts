import { CanalDTO } from './dto/canal.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CANAL } from 'src/common/models/models';
import { ICanal } from 'src/common/interfaces/canal.interface.';

@Injectable()
export class CanalService {
  constructor(@InjectModel(CANAL.name) private readonly model: Model<ICanal>) {}

  
  async create(studentDTO: CanalDTO): Promise<ICanal> {
    const newStudent = new this.model(studentDTO);
    return await newStudent.save();
  }

  async findAll(): Promise<ICanal[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ICanal> {
    return await this.model.findById(id);
  }

  async update(id: string, studentDTO: CanalDTO): Promise<ICanal> {
    return await this.model.findByIdAndUpdate(id, studentDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
