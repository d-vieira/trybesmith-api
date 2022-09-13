import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product, ProductBody } from '../types';

type ProductModel = {
  id: number,
  name: string,
  amount: string,
  orderId: number,
} & RowDataPacket;

export async function create(product: ProductBody): Promise<Product> {
  const [data] = await connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Products(name, amount)
      VALUES (?, ?)
    `, [product.name, product.amount]);
  return {
    id: data.insertId,
    name: product.name,
    amount: product.amount,
  };
}

export async function getAll() {
  const [data] = await connection.execute<ProductModel[]>(`
    SELECT id, name, amount, orderId FROM Trybesmith.Products
  `);
  return data;
}