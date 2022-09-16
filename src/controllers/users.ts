import { Request, Response } from 'express';
import * as userService from '../services/users';
import { UserBody, HttpStatusCode, LoginData } from '../types';

export async function create(req: Request<unknown, unknown, UserBody>, res: Response<object>) {
  const newUser = await userService.create(req.body);
  return res.status(HttpStatusCode.CREATED).json({ token: newUser });
}

export async function login(req: Request<unknown, unknown, LoginData>, res: Response) {
  const { token } = await userService.login(req.body);
  if (!token) {
    return res.status(HttpStatusCode.INVALID_CREDENTIALS)
      .json({ message: 'Username or password invalid' });
  }
  return res.status(HttpStatusCode.OK).json({ token });
}
