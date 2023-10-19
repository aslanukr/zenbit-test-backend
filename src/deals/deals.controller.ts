import { Controller, Get } from '@nestjs/common';

@Controller('deals')
export class DealsController {
  @Get()
  getAll() {
    return 'all deals';
  }
}
