import { Module } from '@nestjs/common';
import { UserEventsService } from './user-events.service';
import { UserEventsController } from './user-events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEvent, UserEventSchema } from './schemas/user-event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserEvent.name, schema: UserEventSchema },
    ]),
  ],
  controllers: [UserEventsController],
  providers: [UserEventsService],
})
export class UserEventsModule {}
