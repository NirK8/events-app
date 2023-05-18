import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SeveretyLevel, User } from '@events-app/types';

import { UsersSchema } from './user.schema';

@Schema({ collection: 'events' })
export class UserEvent extends Document {
  @Prop({ required: true, type: UsersSchema, schema: UsersSchema })
  user: User;

  @Prop({ required: true, type: String })
  os: string;

  @Prop({ required: true, type: String })
  eventType: string;

  @Prop({ required: true, type: String })
  severity: SeveretyLevel;

  @Prop({ required: true, type: Date })
  time: Date;
}

export const UserEventSchema = SchemaFactory.createForClass(UserEvent);
