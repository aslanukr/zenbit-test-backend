import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';
import { RegisterUserDto } from './dto/register-user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async register(usersDto: RegisterUserDto): Promise<User> {
    const newUser = new this.userModel(usersDto);
    return newUser.save();
  }
}
