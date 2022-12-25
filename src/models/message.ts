import { User } from './user';

export interface Message {
  subject: string;
  message: string;
  user: User;
}
