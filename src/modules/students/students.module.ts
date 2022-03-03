import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsSchema } from './students.schema'; // 定义的schema模型
import { StudentsService } from './students.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Students', // 需要个schema名称对应
        schema: StudentsSchema, // 引入的schema
        collection: 'user', // 数据库名称
      },
    ]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
