import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';
import { UserRegisterRequest } from 'src/models/userRegisterRequest';
const users: User[] = [];

@Injectable()
export class UsersService {
  register(user: UserRegisterRequest): number {
    const nextId = users.length ? users[users.length - 1].id + 1 : 1;
    const userToAdd: User = {
      id: nextId,
      ...user,
    };
    users.push(userToAdd);
    return nextId;
  }
}
