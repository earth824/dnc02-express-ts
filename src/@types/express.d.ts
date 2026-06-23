import 'express';

// module augmentation
declare module 'express' {
  // interface declaration merging
  interface Request {
    user?: JwtPayload;
  }
}
