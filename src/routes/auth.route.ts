import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';

export const authRouter: Router = Router();

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
