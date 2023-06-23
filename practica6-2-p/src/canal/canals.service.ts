import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCanalInput } from './dto/create-canal'
import { Canal } from './entities/canal.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCanalInput } from './dto/update-canal';

@Injectable()
export class CanalsService {

  constructor( 
    @InjectRepository(Canal)
    private readonly canalsRepository:Repository<Canal> ){}

  async create(createCanalInput: CreateCanalInput): Promise<Canal>  {
    const newCanal = this.canalsRepository.create(createCanalInput);
    return await this.canalsRepository.save(newCanal ); 
  }

  async findAll(): Promise<Canal[]> {
    return this.canalsRepository.find();
  }

  async findOne(id: string): Promise<Canal> {
     const canal= await  this.canalsRepository.findOneBy({id});
     if (!canal) throw new NotFoundException(`Not found`)
     return canal;
  }

  async update(id: string, updateCanalInput: UpdateCanalInput): Promise<Canal> {
    
    const canal = await this.canalsRepository.preload(updateCanalInput);
    if (!canal) throw new NotFoundException(`Not found`)
    return this.canalsRepository.save(canal);

  }

  async remove(id: string): Promise<Canal> {

    const canal = await  this.findOne(id);

    await this.canalsRepository.update({id:id},{estado: !canal.estado  });

    //await this.canalsRepository.remove(canal);

    return {...canal, id};

  }
}
