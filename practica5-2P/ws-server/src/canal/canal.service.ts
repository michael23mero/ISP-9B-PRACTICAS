import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCanalDto } from './dto/create-canal.dto';
import { UpdateCanalDto } from './dto/update-canal.dto';
import { Canal } from './entities/canal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CanalService {

  private readonly logger = new Logger('CanalService');

  constructor( 
    @InjectRepository(Canal) 
    private readonly canalRepository: Repository<Canal>,

    ){}

  
  async create(createCanalDto: CreateCanalDto) {
    try {
      const canal =  this.canalRepository.create(createCanalDto);
      await this.canalRepository.save(canal);
      return canal;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.canalRepository.find({});
  }

  async findOne(id: string) {
    const canal= await  this.canalRepository.findOneBy ({ id });
    if (!canal)
      throw new NotFoundException(`Canal ${id} no encontrado`);
    return canal;

  }

  async update(id: string, updateEstudianteDto: UpdateCanalDto) {
    const canal = await this.canalRepository.preload({
      id: id,
      ...updateEstudianteDto
    });
    if (!canal) throw new NotFoundException(`Canal ${id} no encontrado`)

    try {
      await  this.canalRepository.save(canal)
      return canal;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const canal = await this.findOne(id);
    await this.canalRepository.remove(canal);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
