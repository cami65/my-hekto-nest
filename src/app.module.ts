import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsController } from './products/products.controller';
import { ProductService } from './products/products.service';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, ProductsController, UsersController],
  providers: [AppService, ProductService, UsersService],
})
export class AppModule {}
