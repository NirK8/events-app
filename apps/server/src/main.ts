/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { UserEventsService } from './resources/user-events/user-events.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const eventsService = app.get(UserEventsService);
  await eventsService.initializeDatabase();
  const globalPrefix = 'api';
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    })
  );
  app.enableCors({
    origin: '*',
    preflightContinue: false,
    allowedHeaders: '*',
  });
  app.setGlobalPrefix(globalPrefix);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
