import { Controller, Get } from '@nestjs/common';
import { DealsService } from './deals.service';
import { Deal } from '../deals/schemas/deal.schema';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Get()
  async getDeals(): Promise<Deal[]> {
    return this.dealsService.getDeals();
  }
}
