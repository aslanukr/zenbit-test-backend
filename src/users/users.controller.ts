import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post
} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  register(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return this.usersService.register(registerUserDto);
  }
}
