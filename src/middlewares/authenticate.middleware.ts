import type { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/app-error.js';
import { HttpStatus } from '../types/http-status.js';
import { jwtService } from '../services/jwt.service.js';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const [bearer, token] = req.headers.authorization?.split(' ') ?? [];
  if (bearer !== 'Bearer' || !token) {
    throw new AppError(HttpStatus.BAD_REQUEST, 'Invalid authorization');
  }

  try {
    const payload = jwtService.verify(token);
    req.user = payload;
  } catch (err) {}
};

// interface Request {
//   ...default
// }

// interface Request {
//   user: JwtPayload
// }
