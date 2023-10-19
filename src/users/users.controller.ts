import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Delete
} from '@nestjs/common';
import { RegisterUserDto } from './dto/registerUser.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { LoginUserDto } from './dto/loginUserDto.dto';
import { LogoutDto } from './dto/logoutDto.dto';

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

  @Delete('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async logout(@Body() logoutDto: LogoutDto): Promise<void> {
    const { email } = logoutDto;
    await this.usersService.logout(email);
  }
}