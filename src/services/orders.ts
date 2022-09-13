import * as orderModel from '../models/orders';
import { Order } from '../types';

export async function getAll(): Promise<Order[]> {
  const order: Order[] = await orderModel.getAll();
  return order;
}

export function skipDefault() {
  return 'I DONT WANNA USE EXPORT DEFAULT';
}