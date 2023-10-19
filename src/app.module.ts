import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { DealsModule } from './deals/deals.module';

import * as dotenv from 'dotenv';
dotenv.config();

const { DB_HOST } = process.env;

@Module({
  imports: [MongooseModule.forRoot(`${DB_HOST}`), UsersModule, DealsModule]
})
export class AppModule {}
