export type Product = {
  id: number,
  orderId?: number,
} & ProductBody;

export type ProductBody = {
  name: string,
  amount: string,
};

export enum HttpStatusCode {
  CREATED = 201,
  OK = 200,
  MISSING_FIELD = 400,
  INVALID_CREDENTIALS = 401,
  NOT_FOUND = 404,
}

export type UserBody = {
  username: string,
  classe: string,
  level: number,
  password: string,
};

export type User = {
  id: number,
};

export type Order = {
  id: number,
  userId: number,
  productsIds: number[],
};