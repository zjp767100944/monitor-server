import { Controller, Get, Post } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('resgite')
  register() {
    return this.studentsService.studentsInfo();
  }

  @Get('login')
  login() {
    return this.studentsService.studentsInfo();
  }
}
