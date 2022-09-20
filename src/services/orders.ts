import * as orderModel from '../models/orders';
import { Order, ProductsOrder } from '../types';

export async function getAll(): Promise<Order[]> {
  const order: Order[] = await orderModel.getAll();
  return order;
}

export async function create(order: ProductsOrder) {
  const data = await orderModel.create(order);
  return data;
}