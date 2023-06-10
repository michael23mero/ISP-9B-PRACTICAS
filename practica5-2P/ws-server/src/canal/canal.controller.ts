import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
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
  findAll()  {
    return this.canalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.canalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCanalDto: UpdateCanalDto) {
    return this.canalService.update(id, updateCanalDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.canalService.remove(id);
  }
}
