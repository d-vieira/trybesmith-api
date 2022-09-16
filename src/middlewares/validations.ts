import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { HttpStatusCode } from '../types';

// const registerSchema = Joi.object({
//   username: Joi.string().min(3).required().messages({
//     'any.value': '"username" must be a string',
//     'number.min': '"username" length must be at least 3 characters long',
//     'any.required': '"username" is required',
//   }),
//   classe: Joi.string().min(3).required().messages({
//     'any.value': '"classe" must be a string',
//     'number.min': '"classe" length must be at least 3 characters long',
//     'any.required': '"classe" is required',
//   }),
//   level: Joi.number()
//     .min(1)
//     .required()
//     .messages({
//       'any.value': '"level" must be a number',
//       'number.min': '"level" must be greater than or equal to 1',
//       'any.required': '"level" is required',
//     }),
//   password: Joi.string().min(8).required().messages({
//     'any.value': '"password" must be a string',
//     'number.min': '"password" length must be at least 8 characters long',
//     'any.required': '"password" is required',
//   }),
// });

const createSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export function createValidation(req: Request, res: Response, next: NextFunction) {
  const { error } = createSchema.validate(req.body);
  if (error?.message.includes('required')) {
    return res.status(HttpStatusCode.MISSING_FIELD).json({ message: error.details[0].message });
  }
  if (error && !error?.message.includes('required')) {
    return res.status(HttpStatusCode.ENTITY_ERROR).json({ message: error.details[0].message });
  }
  next();
}

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
