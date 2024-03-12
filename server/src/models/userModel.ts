import db from '../database/config';
import { Schema, Document } from 'mongoose';

interface UserDocument extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const UserSchema = new Schema<UserDocument>({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  }
}, {
  timestamps: true
});

const UserModel = db.model<UserDocument>('User', UserSchema);

export default UserModel;
