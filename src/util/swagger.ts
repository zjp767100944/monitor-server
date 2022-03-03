import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

/**
 * http://localhost:3001/docs
 */

export default function setUpSwaggerDocs(app: INestApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
}
