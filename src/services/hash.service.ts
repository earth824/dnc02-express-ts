import bcrypt from 'bcrypt';

export const hashService = {
  hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, 12);
  }
} as const;
