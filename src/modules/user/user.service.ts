import { Injectable } from '@nestjs/common';
import { RegiterDto } from './dto/register.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async studentsInfo() {
    // return await this.UserRepository.find().exec();
  }

  async register(registerDto: RegiterDto) {
    const newUser = await this.userRepository.register(registerDto);
    return newUser;
  }

  async loginAccount(loginDto: any) {
    const user = await this.userRepository.loginAccount(loginDto);
    return user;
  }
}
