import { User } from '@events-app/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ autoCreate: false, _id: false })
class UserClass extends Document implements User {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ required: true, type: String })
  email: string;
}

export const UsersSchema = SchemaFactory.createForClass(UserClass);
