import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/user';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUserCredentials(
    username: string,
    password: string,
  ): User | undefined {
    console.log(username, password);
    const user = this.usersService.getUser(username, password);

    return user;
  }

  async loginWithCredentials(user: User) {
    const payload = { username: user.email, id: user.id };

    return {
      username: user.email,
      userId: user.id,
      //avatar: user.,
      access_token: this.jwtService.sign(payload),
      expiredAt: Date.now() + 60000,
    };
  }
}
