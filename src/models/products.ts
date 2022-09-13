import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product, ProductBody } from '../types';

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

export function getAll(): void {

}