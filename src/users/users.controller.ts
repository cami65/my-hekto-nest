import { Body, Controller, Post } from '@nestjs/common';
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
}
