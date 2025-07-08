import { z } from 'zod';

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    role: z.string(),
    roleId: z.number(),
    nusp: z.string(),
    created_at: z.date(),
    active_sessions: z.number().int().nonnegative()
});

export type UserList = z.infer<typeof userSchema>;

export const listUsersOutSchema = z.object({
    result: z.array(userSchema)
});