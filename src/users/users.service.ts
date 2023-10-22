import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';
import { RegisterUserDto } from './dto/registerUser.dto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { LoginUserDto } from './dto/loginUserDto.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async register(usersDto: RegisterUserDto): Promise<User> {
    const { email, password } = usersDto;

    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new BadRequestException('Email in use. Try another one');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.userModel({
      ...usersDto,
      password: hashedPassword
    });

    await newUser.save();

    return newUser;
  }

  async login(
    loginDto: LoginUserDto
  ): Promise<{ token: string; email: string }> {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid password or email');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid password or email');
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '23h'
    });

    user.token = token;
    await user.save();

    return {
      email: user.email,
      token
    };
  }

  async logout(email: string): Promise<void> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.token = '';
    await user.save();
  }

  async getUserByToken(token: string) {
    return await this.userModel.findOne({ token });
  }
}
