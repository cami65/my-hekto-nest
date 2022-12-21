import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';

import { Product } from 'src/models/product';
import { CreateProductRequest } from 'src/models/productCreateRequest';
import { ProductService } from './products.service';


@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Product[] {
    console.log(`GET products`);
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Product {
    console.log(`GET product with id ${id}`);
    return this.productService.getProductById(+id);
  }

  @Post()
  createProduct(@Body() request: CreateProductRequest): number {
    return this.productService.createProduct(request);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() request: CreateProductRequest,
  ) {
    this.productService.updateProduct(+id, request);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    this.productService.deleteProduct(+id);
  }

  @Patch(':id/:count')
  changeProductCount(@Param('id') id: string, @Param('count') count: string) {
    this.productService.changeProductCount(+id, +count);
  }
}