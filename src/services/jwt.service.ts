import jwt from 'jsonwebtoken';

export type JwtPayload = {
  sub: string;
  email: string;
};

const JWT_SECRET = 'abcdefghijklmnopqrstuvwxyz';

export const jwtService = {
  sign(payload: JwtPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
  },
  verify(token: string): JwtPayload {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  }
} as const;
