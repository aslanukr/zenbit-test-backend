import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DealDocument = Deal & Document;

@Schema()
export class Deal extends Document {
  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ required: true, type: Number })
  ticket: number;

  @Prop({ required: true, type: Number })
  yield: number;

  @Prop({ required: true, type: Number })
  daysleft: number;

  @Prop({ required: true, type: Number })
  sold: number;
}

export const DealSchema = SchemaFactory.createForClass(Deal);
