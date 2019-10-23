import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('Bootstrap');
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

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    // app.enableCors({ origin: serverConfig.origin });
    // logger.log(`Accepting request from origin ${serverConfig.origin}`);
  }

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`🚀 Server running on port ${port}`);
}
bootstrap();
