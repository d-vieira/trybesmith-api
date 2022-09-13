import Jwt from 'jsonwebtoken';

const SECRET = 'segredinho';
const JWT_CONFIG: object = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export function createToken(payload: object) {
  const token = Jwt.sign(payload, SECRET, JWT_CONFIG);
  return token;
}

export function verifyToken(token: string) {
  const data = Jwt.verify(token, SECRET);
  return data;
}