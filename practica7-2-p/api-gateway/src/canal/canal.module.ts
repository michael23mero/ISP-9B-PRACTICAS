import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { CanalController } from './canal.controller';

@Module({
  imports: [ProxyModule],
  controllers: [CanalController],
})
export class CanalModule {}
