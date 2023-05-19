import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HealthModule } from './resources/health/health.module';
import { UserEventsModule } from './resources/user-events/user-events.module';

export const AppModules = [UserEventsModule, HealthModule];

@Module({
  imports: [
    ...AppModules,
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    }),
    UserEventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
