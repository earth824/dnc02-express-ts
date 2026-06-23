import type { RegisterInput } from '../schemas/auth.schema.js';
import { hashService } from './hash.service.js';

export const authService = {
  async register(input: RegisterInput) {
    const hashed = await hashService.hash(input.password);
  }
} as const;
