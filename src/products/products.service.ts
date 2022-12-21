import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product';
import { CreateProductRequest } from 'src/models/productCreateRequest';

let products: Product[] = [
  {
    id: 1,
    name: 'Pen',
    count: 10,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Apple',
    count: 5,
    categoryId: 2,
  },
  {
    id: 3,
    name: 'ApplePen',
    count: 7,
    categoryId: 3,
  },
  {
    id: 4,
    name: 'Pineapple',
    count: 16,
    categoryId: 2,
  },
  {
    id: 5,
    name: 'PineapplePen',
    count: 3,
    categoryId: 3,
  },
];

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return products;
  }

  getProductById(id: number): Product {
    return products.find((product) => product.id === id);
  }

  createProduct(request: CreateProductRequest): number {
    const newId = products[products.length - 1].id + 1;
    const newProduct: Product = {
      id: newId,
      name: request.name,
      count: 0,
      categoryId: request.categoryId,
    };
    products.push(newProduct);

    return newId;
  }

  updateProduct(id: number, request: CreateProductRequest) {
    const productToChange = this.getProductById(id);
    productToChange.categoryId = request.categoryId;
    productToChange.name = request.name;
  }

  deleteProduct(id: number) {
    products = products.filter((product) => product.id !== id);
  }

  changeProductCount(id: number, count: number) {
    const productToChange = this.getProductById(id);
    productToChange.count = count;
  }
}