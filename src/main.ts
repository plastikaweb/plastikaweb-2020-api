import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Plastikaweb API')
    .setDescription('Plastikaweb API swagger documentation')
    .setVersion('0.1')
    .addTag('plastikaweb')
    .setSchemes('http', 'https')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);

  Logger.log(
    `🚀 Server running on port ${process.env.PORT} & database ${process.env.MONGO_URI}`,
    'Bootstrap',
  );
}
bootstrap();
