import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CanalService } from './canal.service';
import { CreateCanalDto } from './dto/create-canal.dto';
import { UpdateCanalDto } from './dto/update-canal.dto';
import { Canal } from './entities/canal.entity';

@Controller('canal')
export class CanalController {
  constructor(private readonly canalService: CanalService) {}

  @Post()
  create(@Body() createCanalDto: CreateCanalDto) {
    return this.canalService.create(createCanalDto);
  }

  @Get()
  findAll() : Canal[] {
    return this.canalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.canalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateCanalDto) {
    return this.canalService.update(+id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.canalService.remove(+id);
  }
}
