import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { Deal, DealSchema } from './schemas/deal.schema';

@Module({
  providers: [DealsService],
  controllers: [DealsController],
  imports: [
    MongooseModule.forFeature([{ name: Deal.name, schema: DealSchema }])
  ]
})
export class DealsModule {}
