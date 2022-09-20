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
  ENTITY_ERROR = 422,
}

export type UserBody = {
  username: string,
  classe: string,
  level: number,
  password: string,
};

export type User = {
  id: number,
  username: string,
};

export type Order = {
  id: number,
  userId: number,
  productsIds: number[],
};

export type JwtPayload = {
  id: number,
  username: string,
};

export type LoginData = {
  username: string,
  password: string,
};

export type ProductsOrder = {
  id: number,
  productsIds: number[],
};