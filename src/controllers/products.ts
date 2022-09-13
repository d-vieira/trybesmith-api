import { Request, Response } from 'express';
import * as productService from '../services/products';
import { ProductBody, Product, HttpStatusCode } from '../types';

export async function create(req: Request<unknown, unknown, ProductBody>, res: Response<Product>) {
  const data = req.body;
  const product = await productService.create(data);
  return res.status(HttpStatusCode.CREATED).json(product);
}

export async function getAll(_req: Request, res: Response) {
  const data = await productService.getAll();
  return res.status(HttpStatusCode.OK).json(data);
}