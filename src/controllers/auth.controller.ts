import type { NextFunction, Request, RequestHandler, Response } from 'express';

type LoginResponse = {
  access_token: string;
  user: { id: number; email: string; role: 'USER' | 'ADMIN' };
};

export const authController = {
  async register(req: Request, res: Response) {},

  login: async (
    req: Request,
    res: Response<LoginResponse>,
    next: NextFunction
  ) => {
    res.status(201).json();
  }
} satisfies Record<string, RequestHandler>;
