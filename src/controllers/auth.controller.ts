import type { NextFunction, Request, RequestHandler, Response } from 'express';
import type { LoginInput, RegisterInput } from '../schemas/auth.schema.js';
import { authService } from '../services/auth.service.js';
import { HttpStatus } from '../types/http-status.js';

type LoginResponse = {
  access_token: string;
  user: { id: number; email: string };
};

export const authController = {
  async register(req: Request, res: Response) {
    const input = req.body as RegisterInput;
    await authService.register(input);
    res.status(HttpStatus.CREATED).json({ success: true });
  },

  async login(req: Request, res: Response) {
    const { email, password } = req.body as LoginInput;
    const data = await authService.login(email, password);
    res.status(HttpStatus.OK).json({ success: true, data });
  }
} satisfies Record<string, RequestHandler>;
