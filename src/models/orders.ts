import { RowDataPacket } from 'mysql2';
import connection from './connection';

type OrderModel = {
  id: number,
  userId: number,
  productsIds: number[],
} & RowDataPacket;

export async function getAll() {
  const [data] = await connection.execute<OrderModel[]>(`
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
      JOIN Trybesmith.Products AS p ON o.id = p.orderId
    GROUP BY o.id ORDER BY o.userId
`);
  return data;
}

export function skipDefault() {
  return 'I DONT WANNA USE EXPORT DEFAULT';
}