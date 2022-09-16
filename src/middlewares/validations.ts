import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { HttpStatusCode } from '../types';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({ 'any.required': '"username" is required' }),
  password: Joi.string().required().messages({ 'any.required': '"password" is required' }),
});

export function loginValidation(req: Request, res: Response, next: NextFunction) {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(HttpStatusCode.MISSING_FIELD).json({ message: error.details[0].message });
  }
  next();
}

export const someThingElse = 'just to allow me a simple export';