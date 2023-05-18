import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsModule } from './resources/cats/cats.module';
import { HealthModule } from './resources/health/health.module';

export const AppModules = [CatsModule, HealthModule];

@Module({
  imports: [
    ...AppModules,
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
