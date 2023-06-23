import { Module } from '@nestjs/common';
import { CanalsService } from './canals.service';
import { CanalsResolver } from './canals.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Canal } from './entities/canal.entity';

@Module({
  providers: [CanalsResolver, CanalsService],
  imports:[
    TypeOrmModule.forFeature([Canal])
  ]
})
export class CanalsModule {}
