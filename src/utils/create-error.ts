import type { HttpStatusCode } from '../types/http-status.js';

export const createError = (
  statusCode: HttpStatusCode,
  message: string,
  details?: Record<string, string>
) => {};
