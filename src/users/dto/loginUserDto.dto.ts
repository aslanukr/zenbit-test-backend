import { IsEmail, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  password: string;
}
