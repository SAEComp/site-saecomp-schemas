import { z } from 'zod';

// Esquema de obtenção de parâmetros de entrada para obtenção das páginas de produtos
export const getProductPageInSchema = z.object({
    pageSize: z.coerce.number(),
    page: z.coerce.number(),
    category: z.enum(['sweet', 'salty', 'drink']).optional()
});

// Tipo do typescript
export type ICGetProductPageInSchema = z.infer<typeof getProductPageInSchema>;