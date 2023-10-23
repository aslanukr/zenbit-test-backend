import { IsEmail, MinLength } from 'class-validator';

export class RegisterUserDto {
  @MinLength(2, { message: 'User name must be at least 2 characters long' })
  readonly username: string;

  @IsEmail({}, { message: 'Invalid email address' })
  readonly email: string;

  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  readonly password: string;
}
