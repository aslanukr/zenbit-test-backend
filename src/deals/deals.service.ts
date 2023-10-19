import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deal, DealDocument } from '../deals/schemas/deal.schema';

@Injectable()
export class DealsService {
  constructor(@InjectModel(Deal.name) private dealModel: Model<DealDocument>) {}

  async getDeals(): Promise<Deal[]> {
    return this.dealModel.find().exec();
  }
}
