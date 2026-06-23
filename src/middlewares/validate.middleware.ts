import type { NextFunction, Request, Response } from 'express';
import type { ZodType } from 'zod';

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
    }
  };

// { body: zod schema, params: zod schema, query: zod schema }
