import { Model } from 'mongoose';
import { Deal, DealDocument } from '../deals/schemas/deal.schema';
export declare class DealsService {
    private dealModel;
    constructor(dealModel: Model<DealDocument>);
    getDeals(): Promise<Deal[]>;
}
