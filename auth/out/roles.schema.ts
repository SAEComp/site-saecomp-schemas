import { z } from 'zod';
import { permissionSchema } from './permissions.schema';


export const roleSchema = z.object({
    id: z.number().int().positive(),
    name: z.string(),
    permissions: z.array(permissionSchema),
});

export type Role = z.infer<typeof roleSchema>;

export const listRolesOutSchema = z.object({
    roles: z.array(roleSchema),
});
export type ListRolesOut = z.infer<typeof listRolesOutSchema>;

export const addRoleOutSchema = z.object({
    id: z.number().int().positive(),
});
export type AddRoleOut = z.infer<typeof addRoleOutSchema>;

