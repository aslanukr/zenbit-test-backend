import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Request
} from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUser.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { LoginUserDto } from './dto/loginUserDto.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return this.usersService.register(registerUserDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginDto: LoginUserDto
  ): Promise<{ token: string; email: string }> {
    return this.usersService.login(loginDto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async logout(@Request() req) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return { message: 'Token not provided' };
    }

    const tokenArray = authHeader.split(' ');
    const token = tokenArray[1];
    await this.usersService.logout(token);
  }

  @Get('current')
  async getCurrentUser(@Request() req) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return { message: 'Token not provided' };
    }

    const tokenArray = authHeader.split(' ');
    const token = tokenArray[1];

    const user = await this.usersService.getUserByToken(token);

    if (!user) {
      return { message: 'Invalid token' };
    }

    return user.email;
  }
}
