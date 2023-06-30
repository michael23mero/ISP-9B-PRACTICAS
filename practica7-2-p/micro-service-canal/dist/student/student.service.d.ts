import { StudentDTO } from './dto/student.dto';
import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { IStudent } from 'src/common/interfaces/student.interface';
export declare class StudentService {
    private readonly model;
    constructor(model: Model<IStudent>);
    create(studentDTO: StudentDTO): Promise<IStudent>;
    findAll(): Promise<IStudent[]>;
    findOne(id: string): Promise<IStudent>;
    update(id: string, studentDTO: StudentDTO): Promise<IStudent>;
    delete(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
