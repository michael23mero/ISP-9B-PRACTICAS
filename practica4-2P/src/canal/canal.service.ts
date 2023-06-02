import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCanalDto } from './dto/create-canal.dto';
import { UpdateCanalDto } from './dto/update-canal.dto';
import { Canal } from './entities/canal.entity';

@Injectable()
export class CanalService {

  private canals: Canal[] = [
    {
      id:1, identificacion:'10' , nombre_de_canal: 'Canal de Deportes', estado:true
    },
    {
      id:2, identificacion:'20' , nombre_de_canal: 'Canal de Peliculas', estado:true
    },
  ]

  create(createEstudianteDto: CreateCanalDto) {
    const canal = new Canal();
    canal.id=  Math.max( ... this.canals.map(elemento => elemento.id),0 )+1 ;
    canal.nombre_de_canal= createEstudianteDto.nombre_de_canal;
    this.canals.push(canal);
    return canal;
  }

  findAll() : Canal[] {
    return this.canals;
  }

  findOne(id: number) {
    const canal =  this.canals.find(canal=> canal.id===id);
    if (!canal) throw new NotFoundException(`ID ${id} not found`)
    return canal;
  }

  update(id: number, updateEstudianteDto: UpdateCanalDto) {
    const { identificacion, nombre_de_canal, estado } = updateEstudianteDto;
    const canal = this.findOne(id);
    if (identificacion) canal.identificacion = identificacion;
    if (nombre_de_canal) canal.nombre_de_canal = nombre_de_canal;
    if (estado!= undefined) canal.estado = estado;

    this.canals =  this.canals.map( elemento=> {
      if (elemento.id===id) return canal;
      return elemento;
    } )

    return canal;

  }

  remove(id: number) {
    this.findOne(id);
    this.canals =  this.canals.filter(elemento=> elemento.id!== id);
  }
}
