import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  Response,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { resolve } from 'path/posix';
import { makeSalt, encryptPassword } from 'src/util/cryptogram';
import { LoginDto } from './dto/loginAccount.dto';
import { RegiterDto } from './dto/register.dto';
import { User } from './user.shcema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
  ) {}

  async studentsInfo() {
    return await this.UserModel.find().exec();
  }

  async register(registerDto: RegiterDto) {
    const { username, password } = registerDto;
    const salt = makeSalt(); // 制作密码盐
    const hashPassword = encryptPassword(password, salt); // 加密密码

    let newUser = new this.UserModel({
      password: hashPassword,
      username,
      salt,
    });

    try {
      newUser = await newUser.save();
    } catch (err) {
      throw new InternalServerErrorException(err);
    }

    if (!newUser) {
      throw new ConflictException('User not created');
    }

    return newUser;
  }

  async loginAccount(loginDto: LoginDto) {
    const { username, password } = loginDto;

    return this.UserModel.findOne({ username })
      .then((user) => {
        const { password: dbPassword, salt } = user;
        const currentPassword = encryptPassword(password, salt);
        console.log(dbPassword, currentPassword);
        if (dbPassword === currentPassword) {
          return user;
        } else {
          throw new NotFoundException('Password is wrong');
        }
      })
      .catch((err) => {
        throw new NotFoundException('User not found');
      });
  }
}
