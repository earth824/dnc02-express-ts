import type { NextFunction, Request, RequestHandler, Response } from 'express';
import type { RegisterInput } from '../schemas/auth.schema.js';

type LoginResponse = {
  access_token: string;
  user: { id: number; email: string; role: 'USER' | 'ADMIN' };
};

export const authController = {
  async register(req: Request, res: Response) {
    const input = req.body as RegisterInput;
  },

  login: async (
    req: Request,
    res: Response<LoginResponse>,
    next: NextFunction
  ) => {
    res.status(201).json();
  }
} satisfies Record<string, RequestHandler>;
