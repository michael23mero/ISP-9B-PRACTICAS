import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Canal } from '../canal/entities/canal.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CanalService } from 'src/canal/canal.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       canal: Canal
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Canal)
     private readonly canalRepository: Repository<Canal>,
     private readonly canalService: CanalService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.canalService.prueba());
        const canal =await  this.canalRepository.findOneBy({ nombre_de_canal: name });
        if (!canal) throw new Error('Canal no encontrado');
        //if (!estudiante.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, canal: canal};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].canal.nombre_de_canal;
    }
}
