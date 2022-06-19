import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RyanModule } from './ryan/ryan.module';

@Module({
  imports: [RyanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
