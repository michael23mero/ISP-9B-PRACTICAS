import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CanalModule } from './canal/canal.module';

@Module({
  imports: [CanalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
