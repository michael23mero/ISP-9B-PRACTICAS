import { CanalService } from './canal.service';
import { CanalDTO } from './dto/canal.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CanalMsg } from 'src/common/constants';

@Controller()
export class CanalController {
  constructor(private readonly studentService: CanalService) {}

  @MessagePattern(CanalMsg.CREATE)
  create(@Payload() studentDTO: CanalDTO) {
    return this.studentService.create(studentDTO);
  }

  @MessagePattern(CanalMsg.FIND_ALL)
  findAll() {
    return this.studentService.findAll();
  }

  @MessagePattern(CanalMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.studentService.findOne(id);
  }
  @MessagePattern(CanalMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.studentService.update(payload.id, payload.studentDTO);
  }

  @MessagePattern(CanalMsg.DELETE)
  delete(@Payload() id: string) {
    return this.studentService.delete(id);
  }
}
