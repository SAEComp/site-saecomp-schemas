import { z } from 'zod';


export const permissionSchema = z.object({
    id: z.number().int().positive(),
    name: z.string(),
    description: z.string().nullable(),
});

export type Permission = z.infer<typeof permissionSchema>;

export const listPermissionsOutSchema = z.object({
    permissions: z.array(permissionSchema),
});


export const addPermissionOutSchema = z.object({
    id: z.number().int().positive(),
});

export type AddPermission = z.infer<typeof addPermissionOutSchema>;