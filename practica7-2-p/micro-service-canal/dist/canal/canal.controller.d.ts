import { CanalService } from './canal.service';
import { CanalDTO } from './dto/canal.dto';
export declare class CanalController {
    private readonly studentService;
    constructor(studentService: CanalService);
    create(studentDTO: CanalDTO): Promise<import("../common/interfaces/canal.interface.").ICanal>;
    findAll(): Promise<import("../common/interfaces/canal.interface.").ICanal[]>;
    findOne(id: string): Promise<import("../common/interfaces/canal.interface.").ICanal>;
    update(payload: any): Promise<import("../common/interfaces/canal.interface.").ICanal>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
