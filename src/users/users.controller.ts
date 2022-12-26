import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/models/user';
import { UserRegisterRequest } from 'src/models/userRegisterRequest';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createProduct(@Body() user: UserRegisterRequest): number {
    console.debug(user);
    return this.usersService.register(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/current')
  getCurrentUser(): User {
    return {
      email: 'mail@mail.com',
      firstName: 'John',
      lastName: 'Doe',
      id: 42,
      password: '',
    };
  }
}
