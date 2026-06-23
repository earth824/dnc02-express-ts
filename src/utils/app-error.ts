import type { HttpStatusCode } from '../types/http-status.js';

export class AppError extends Error {
  constructor(
    public statusCode: HttpStatusCode,
    message: string,
    public details?: unknown
  ) {
    super(message);
  }
}
