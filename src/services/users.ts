import * as userModel from '../models/users';
import { HttpStatusCode, LoginData, UserBody } from '../types';
import * as jwt from '../helpers/jwt';

export async function create(data: UserBody) {
  const newUser = await userModel.create(data);
  const token = jwt.createToken({ id: newUser.id, username: newUser.username });
  return token;
}

export async function login(data: LoginData) {
  const validData = await userModel.login(data);
  if (!validData) {
    return { code: HttpStatusCode.INVALID_CREDENTIALS };
  }
  const token = jwt.createToken({ id: validData.id, username: validData.username });
  return { code: HttpStatusCode.OK, token };
}

export function xablau() {}