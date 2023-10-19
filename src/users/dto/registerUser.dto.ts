import { IsEmail, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsEmail({}, { message: 'Invalid email address' })
  readonly email: string;

  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  readonly password: string;
}
