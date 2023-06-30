import { StudentService } from './student.service';
import { StudentDTO } from './dto/student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(studentDTO: StudentDTO): Promise<import("../common/interfaces/student.interface").IStudent>;
    findAll(): Promise<import("../common/interfaces/student.interface").IStudent[]>;
    findOne(id: string): Promise<import("../common/interfaces/student.interface").IStudent>;
    update(payload: any): Promise<import("../common/interfaces/student.interface").IStudent>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
