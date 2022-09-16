import Jwt from 'jsonwebtoken';
import { JwtPayload } from '../types';

const SECRET = 'segredinho';
const JWT_CONFIG: object = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export function createToken(payload: JwtPayload) {
  const token = Jwt.sign(payload, SECRET, JWT_CONFIG);
  return token;
}

export function verifyToken(token: string) {
  const data = Jwt.verify(token, SECRET);
  return data;
}