import z, { email } from 'zod';

export const registerSchema = z.object({
  email: z.email(),
  password: z.string().regex(/^[0-9a-zA-Z]{6,}$/)
});

export type RegisterInput = z.infer<typeof registerSchema>;
