import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';

export const authRouter: Router = Router();

authRouter.post(
  '/login',
  validate({ body: loginSchema }),
  authController.login
);

authRouter.post(
  '/register',
  validate({ body: registerSchema }),
  authController.register
);
