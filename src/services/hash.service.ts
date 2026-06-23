import bcrypt from 'bcrypt';

export const hashService = {
  hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, 12);
  },
  compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
} as const;
