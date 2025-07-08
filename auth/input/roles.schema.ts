import { z } from 'zod';
import { roleSchema } from '../out/roles.schema';

export const addRoleInSchema = z.object({
    name: z.string()
});

export type AddRoleIn = z.infer<typeof addRoleInSchema>;

export const editRoleInSchema = roleSchema.omit({
    permissions: true
}).extend({
    permissionsId: z.array(z.number().int().positive())
});

export type EditRoleIn = z.infer<typeof editRoleInSchema>;

export const deleteRoleInSchema = z.object({
    id: z.number().int().positive(),
});

export const changeRoleSchema = z.object({
    userId: z.number().int(),
    roleId: z.number().int()
});