import jwt from 'jsonwebtoken';

type JwtPayload = {
  sub: string;
  email: string;
};

const JWT_SECRET = 'abcdefghijklmnopqrstuvwxyz';

export const jwtService = {
  sign(payload: JwtPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
  }
} as const;
