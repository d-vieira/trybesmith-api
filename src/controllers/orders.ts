import { Request, Response } from 'express';
import { UserId } from '../middlewares/auth';
import * as orderService from '../services/orders';
import { Order, HttpStatusCode } from '../types';

export async function getAll(_req: Request, res: Response<Order[]>) {
  const data = await orderService.getAll();
  return res.status(HttpStatusCode.OK).json(data);
}

export async function create(req: UserId, res: Response) {
  const id = req.user;
  const { productsIds } = req.body;
  if (id) {
    try {
      const data = await orderService.create({ id, productsIds });
      return res.status(HttpStatusCode.CREATED).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}