import type { NextFunction, Request, Response } from 'express';
import { z, type ZodType } from 'zod';
import { AppError } from '../utils/app-error.js';
import { HttpStatus } from '../types/http-status.js';

type ValidateOptions = {
  body?: ZodType;
  params?: ZodType;
  query?: ZodType;
};

export const validate =
  (schemas: ValidateOptions) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (schemas.body) {
      const result = schemas.body.safeParse(req.body);
      if (!result.success) {
        throw new AppError(
          HttpStatus.BAD_REQUEST,
          'Request body validation failed',
          z.flattenError(result.error)
        );
      }

      req.body = result.data;
    }

    next();
  };

// { body: zod schema, params: zod schema, query: zod schema }
