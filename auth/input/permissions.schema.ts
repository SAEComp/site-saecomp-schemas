import { z } from 'zod';
import { permissionSchema } from '../out/permissions.schema';

export const addPermissionInSchema = permissionSchema.omit({ id: true });

export const editPermissionInSchema = permissionSchema;

export const removePermissionInSchema = z.object({
    id: z.number().int().positive(),
});