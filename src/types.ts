export type Product = {
  id: number,
  name: string,
  amount: string,
  orderId?: number,
};

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
