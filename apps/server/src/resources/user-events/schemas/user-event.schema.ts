import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EventType, OS, SeveretyLevel, User } from '@events-app/types';

import { UsersSchema } from './user.schema';

@Schema({ collection: 'events' })
export class UserEvent extends Document {
  @Prop({ required: true, type: UsersSchema, schema: UsersSchema })
  user: User;

  @Prop({ required: true, type: String })
  os: OS;

  @Prop({ required: true, type: String })
  eventType: EventType;

  @Prop({ required: true, type: String })
  severity: SeveretyLevel;

  @Prop({ required: true, type: Date })
  time: string;
}

export const UserEventSchema = SchemaFactory.createForClass(UserEvent);
