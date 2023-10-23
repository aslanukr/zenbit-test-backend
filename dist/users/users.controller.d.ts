import { RegisterUserDto } from './dto/registerUser.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { LoginUserDto } from './dto/loginUserDto.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(registerUserDto: RegisterUserDto): Promise<User>;
    login(loginDto: LoginUserDto): Promise<{
        token: string;
        email: string;
        username: string;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
    getCurrentUser(req: any): Promise<{
        message: string;
        username?: undefined;
        email?: undefined;
    } | {
        username: string;
        email: string;
        message?: undefined;
    }>;
}
