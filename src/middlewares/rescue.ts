import { NextFunction, Request, Response } from 'express';

type Middleware = (req: Request, res: Response, next: NextFunction) => void;

const rescue = (action: Middleware) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await action(req, res, next);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

export default rescue;