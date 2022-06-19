import { Controller, Get } from '@nestjs/common';
import { GetRyanInterface, RyanService } from './shared/ryan.service';

@Controller('ryan')
export class RyanController {
  constructor(private readonly ryanService: RyanService) {}

  @Get()
  getRyan(): GetRyanInterface {
    return this.ryanService.getRyan();
  }
}
