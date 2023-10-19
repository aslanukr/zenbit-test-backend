import { RegisterUserDto } from './dto/registerUser.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { LoginUserDto } from './dto/loginUserDto.dto';
import { LogoutDto } from './dto/logoutDto.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(registerUserDto: RegisterUserDto): Promise<User>;
    login(loginDto: LoginUserDto): Promise<{
        token: string;
        email: string;
    }>;
    logout(logoutDto: LogoutDto): Promise<void>;
}
