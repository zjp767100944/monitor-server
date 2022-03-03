import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { UserModule } from './modules/user/user.module';
import { ProjectModule } from './modules/project/project.module';

@Module({
  imports: [
    StudentsModule,
    UserModule,
    MongooseModule.forRoot('mongodb://user:password@82.157.131.63/monitor', {
      useNewUrlParser: true,
    }),
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
