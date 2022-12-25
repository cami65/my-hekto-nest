import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';
import { UserRegisterRequest } from 'src/models/userRegisterRequest';

const users: User[] = [
  {
    id: 42,
    email: 'example2@mail.com',
    firstName: 'John',
    lastName: 'Doe',
    password: '1234',
  },
  {
    id: 11,
    email: 'nikekber@gmail.com',
    firstName: 'Nigar',
    lastName: 'Akbarli',
    password: '12345',
  },
];

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

  getUser(login: string, password: string): User | undefined {
    console.log(1111);
    return users.find((u) => u.email === login && u.password === password);
  }
}
