import { z } from 'zod';

export const userSchema = z.object({
    id: z.number(),
    name: z.string().nullable(),
    email: z.string().email(),
    roleId: z.number(),
    nusp: z.string(),
    created_at: z.coerce.date(),
    active_sessions: z.number().int().nonnegative()
});

export type UserList = z.infer<typeof userSchema>;

export const listUsersOutSchema = z.object({
    result: z.array(userSchema)
});

export const createUserOutSchema = z.object({
    id: z.number().int().positive()
});