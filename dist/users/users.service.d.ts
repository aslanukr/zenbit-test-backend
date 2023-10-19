import { User, UserDocument } from '../users/schemas/user.schema';
import { RegisterUserDto } from './dto/registerUser.dto';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/loginUserDto.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    register(usersDto: RegisterUserDto): Promise<User>;
    login(loginDto: LoginUserDto): Promise<{
        token: string;
        email: string;
    }>;
    logout(email: string): Promise<void>;
}
