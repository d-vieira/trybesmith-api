import { Request, Response } from 'express';
import * as orderService from '../services/orders';
import { Order, HttpStatusCode } from '../types';

export async function getAll(_req: Request, res: Response<Order[]>) {
  const data = await orderService.getAll();
  return res.status(HttpStatusCode.OK).json(data);
}

export function skipDefault() {
  return 'I DONT WANNA USE EXPORT DEFAULT';
}