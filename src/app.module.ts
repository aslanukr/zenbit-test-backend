import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://Aslan:RYz845wPraqwuXtJ@cluster0.yoe6d8c.mongodb.net/db-deals?retryWrites=true&w=majority`
    ),
    UsersModule,
    DealsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
