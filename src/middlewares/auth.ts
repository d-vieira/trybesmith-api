import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../helpers/jwt';
import { HttpStatusCode } from '../types';

export type UserId = { user?: number } & Request;

export default function auth(req: UserId, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(HttpStatusCode.INVALID_CREDENTIALS).json({ message: 'Token not found' });
    }
    const data = verifyToken(authorization);
    if (typeof data !== 'string') {
      const { id } = data;
      req.user = id;
      next();
    }
  } catch (error) {
    return res.status(HttpStatusCode.INVALID_CREDENTIALS).json({ message: 'Invalid token' });
  }
}