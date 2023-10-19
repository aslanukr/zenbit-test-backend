import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ]
})
export class UsersModule {}
