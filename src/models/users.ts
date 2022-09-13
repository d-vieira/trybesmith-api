import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, UserBody } from '../types';

export async function create(user: UserBody): Promise<User> {
  const [data] = await connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Users(username, classe, level, password)
      VALUES (?, ?, ?, ?)
    `, [user.username, user.classe, user.level, user.password]);
  return { id: data.insertId };
}

export function xablau() {}