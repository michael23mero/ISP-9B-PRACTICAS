import { CanalDTO } from './dto/canal.dto';
import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICanal } from 'src/common/interfaces/canal.interface.';
export declare class CanalService {
    private readonly model;
    constructor(model: Model<ICanal>);
    create(studentDTO: CanalDTO): Promise<ICanal>;
    findAll(): Promise<ICanal[]>;
    findOne(id: string): Promise<ICanal>;
    update(id: string, studentDTO: CanalDTO): Promise<ICanal>;
    delete(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
