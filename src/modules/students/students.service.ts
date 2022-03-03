import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentsService {
  constructor(@InjectModel('Students') private readonly studentsModel) {}

  async studentsInfo() {
    return await this.studentsModel.find().exec();
  }

  async regist() {
    console.log('regist');
  }

  async login() {
    console.log('login');
  }
}
