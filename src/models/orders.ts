import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ProductsOrder } from '../types';
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

export async function create(order: ProductsOrder) {
  const [data] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Orders(userId) VALUES (?)
  `, [order.id]);
  const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;';
  order.productsIds.map((product) => connection.execute<ResultSetHeader>(
    query,
    [data.insertId, product],
  ));
  return { userId: order.id, productsIds: order.productsIds };
}