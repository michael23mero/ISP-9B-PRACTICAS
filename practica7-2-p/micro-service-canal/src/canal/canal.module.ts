import { Module } from '@nestjs/common';
import { CanalService } from './canal.service';
import { CanalSchema } from './schema/canal.schema';
import { CANAL } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { CanalController } from './canal.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CANAL.name,
        useFactory: () => CanalSchema,
      },
    ]),
  ],
  controllers: [CanalController],
  providers: [CanalService],
})
export class CanalModule {}
