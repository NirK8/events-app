import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({ required: true, type: String })
  name: string;

  @Prop(Number)
  age: number;

  @Prop(String)
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
