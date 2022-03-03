import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export interface IUser {
  username?: string;
  password?: string;
  email?: string;
  avatar?: string;
  createTime?: Date;
  updateTime?: Date;
  salt?: string;
}

@Schema()
export class User extends mongoose.Document {
  @Prop({ required: [true, 'username can not be expty'], unique: true })
  username: string;

  @Prop({
    required: [true, 'password can not be empty'],
    unique: true,
    minlength: [6, 'Password should include at least 6 chars'],
  })
  password: string;

  @Prop({
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email should be valid',
    ],
    default: '',
  })
  email: string;

  @Prop({ default: 'default_avatar_img_url' })
  avatar: string;

  @Prop({ default: Date.now })
  createTime: Date;

  @Prop({ default: Date.now })
  updateTime: Date;

  @Prop()
  salt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
