import { z } from 'zod';

export const changeRoleInSchema = z.object({
    userId: z.number().int(),
    newRole: z.string()
});

export type IChangeRoleSchema = z.infer<typeof changeRoleInSchema>;


export const googleAuthInSchema = z.object({
    idToken: z.string(),
    nusp: z.string().optional()
});

export type IGoogleAuthSchema = z.infer<typeof googleAuthInSchema>;


export const tokenRefreshInSchema = z.object({
    refreshToken: z.string(),
});

export type ITokenRefreshSchema = z.infer<typeof tokenRefreshInSchema>;