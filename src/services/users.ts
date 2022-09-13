import * as userModel from '../models/users';
import { UserBody } from '../types';
import * as jwt from '../helpers/jwt';

export async function create(data: UserBody) {
  const newUser = await userModel.create(data);
  const token = jwt.createToken({ id: newUser.id });
  return token;
}

export function xablau() {}