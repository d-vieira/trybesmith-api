import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { LoginData, User, UserBody } from '../types';

type LoginDataModel = {
  id: number,
} & LoginData & RowDataPacket;

export async function create(user: UserBody): Promise<User> {
  const [data] = await connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Users(username, classe, level, password)
      VALUES (?, ?, ?, ?);
    `, [user.username, user.classe, user.level, user.password]);
  return { id: data.insertId, username: user.username };
}

export async function login(loginData: LoginData): Promise<User> {
  const [data] = await connection.execute<LoginDataModel[]>(`
    SELECT id, username FROM Trybesmith.Users
    WHERE username = ? AND password = ?;
  `, [loginData.username, loginData.password]);
  return data[0];
}

export function xablau() {}