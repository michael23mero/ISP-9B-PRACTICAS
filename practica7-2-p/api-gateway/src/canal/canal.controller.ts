import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CanalMSG } from '../common/constants';
import { Observable } from 'rxjs';
import { CanalDTO } from './dto/canal.dto';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { ICanal } from 'src/common/interfaces/canal.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('canals')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/canal')
export class CanalController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyStudent = this.clientProxy.clientProxyCanals();

  @Post()
  create(@Body() studentDTO: CanalDTO): Observable<ICanal> {
    return this._clientProxyStudent.send(CanalMSG.CREATE, studentDTO);
  }

  @Get()
  findAll(): Observable<ICanal[]> {
    return this._clientProxyStudent.send(CanalMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ICanal> {
    return this._clientProxyStudent.send(CanalMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() studentDTO: CanalDTO): Observable<ICanal> {
    return this._clientProxyStudent.send(CanalMSG.UPDATE, { id, studentDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyStudent.send(CanalMSG.DELETE, id);
  }
}
