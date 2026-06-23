import { prisma } from '../db/prisma.js';
import type { RegisterInput } from '../schemas/auth.schema.js';
import { HttpStatus } from '../types/http-status.js';
import { AppError } from '../utils/app-error.js';
import { hashService } from './hash.service.js';
import { jwtService } from './jwt.service.js';

export const authService = {
  async register(input: RegisterInput) {
    const hashed = await hashService.hash(input.password);
    await prisma.user.create({
      data: { email: input.email, password: hashed }
    });
  },
  // access_token, user: { id, email, name }
  async login(
    email: string,
    password: string
  ): Promise<{
    access_token: string;
    user: { id: string; email: string; name: string | null };
  }> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new AppError(HttpStatus.UNAUTHORIZED, 'Invalid email or password');
    }

    const isMatch = await hashService.compare(password, user.password);
    if (!isMatch) {
      throw new AppError(HttpStatus.UNAUTHORIZED, 'Invalid email or password');
    }

    const access_token = jwtService.sign({ sub: user.id, email: user.email });
    return {
      access_token,
      user: { id: user.id, email: user.email, name: user.name }
    };
  }
} as const;
