import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { TransformInterceptor } from './interceptor/transform.interceptor';
import { HttpExceptionFilter } from './filter/http-exception.filter';

import setUpSwaggerDocs from './util/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  setUpSwaggerDocs(app);
  await app.listen(3001);
}
bootstrap();
