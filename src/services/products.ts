import * as productModel from '../models/products';
import { Product, ProductBody } from '../types';

export async function create(data: ProductBody) {
  const product = await productModel.create(data);
  return product;
}

export async function getAll(): Promise<Product[]> {
  const products: Product[] = await productModel.getAll();
  return products;
}