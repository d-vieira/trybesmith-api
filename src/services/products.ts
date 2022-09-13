import * as productModel from '../models/products';
import { ProductBody } from '../types';

export async function create(data: ProductBody) {
  const product = await productModel.create(data);
  return product;
}

export function getAll(): void {

}