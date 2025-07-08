import { z } from 'zod';

export const UserTokenSchema = z.object({
    sub: z.number(),
    role: z.string(),
    permissions: z.array(z.string())
});

export type UserToken = z.infer<typeof UserTokenSchema>;