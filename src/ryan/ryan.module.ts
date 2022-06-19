import { Module } from '@nestjs/common';
import { RyanController } from './ryan.controller';
import { RyanService } from './shared/ryan.service';

@Module({
  providers: [RyanService],
  controllers: [RyanController],
})
export class RyanModule {}
