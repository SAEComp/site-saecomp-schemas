import { z } from 'zod';

// Esquema de obtenção de parâmetros de entrada para obtenção das páginas de produtos
export const getProductPageInSchema = z.object({
    pageSize: z.coerce.number().min(1, { message: 'O tamanho da página deve ser maior ou igual a 1' }),
    page: z.coerce.number().min(1, { message: 'A página deve ser maior ou igual a 1' }),
    category: z.enum(['sweet', 'salty', 'drink']).optional(),
    name: z.string().optional(),
    includeInactive: z.coerce.boolean().optional().default(false),
});

// Tipo do typescript
export type ICGetProductPageInSchema = z.infer<typeof getProductPageInSchema>;