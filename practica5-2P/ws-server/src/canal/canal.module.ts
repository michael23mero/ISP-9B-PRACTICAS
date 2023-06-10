import { Module } from '@nestjs/common';
import { CanalService } from './canal.service';
import { CanalController } from './canal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Canal } from './entities/canal.entity';

@Module({
  controllers: [CanalController],
  providers: [CanalService],
  imports:[ TypeOrmModule.forFeature([
    Canal
  ]) ],
  exports:[ CanalService, TypeOrmModule ]
})
export class CanalModule {}
