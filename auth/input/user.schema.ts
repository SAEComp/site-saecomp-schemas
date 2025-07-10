import { z } from 'zod';

export const createUserInSchema = z.object({
    email: z.string().email(),
    nusp: z.string().min(1),
    roleId: z.number().int().positive()
});

export type CreateUser = z.infer<typeof createUserInSchema>;