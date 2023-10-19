import { DealsService } from './deals.service';
import { Deal } from '../deals/schemas/deal.schema';
export declare class DealsController {
    private readonly dealsService;
    constructor(dealsService: DealsService);
    getDeals(): Promise<Deal[]>;
}
