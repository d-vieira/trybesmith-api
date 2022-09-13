import { Request, Response } from 'express';
import * as userService from '../services/users';
import { UserBody, HttpStatusCode } from '../types';

export async function create(req: Request<unknown, unknown, UserBody>, res: Response<object>) {
  const data = req.body;
  const newUser = await userService.create(data);
  return res.status(HttpStatusCode.CREATED).json({ token: newUser });
}

export function xablau() {}