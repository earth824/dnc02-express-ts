import type { ErrorRequestHandler } from 'express';
import { AppError } from '../utils/app-error.js';

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    res
      .status(err.statusCode)
      .json({ message: err.message, details: err.details });
    return;
  }

  res.status(500).json({ message: err.message });
};
