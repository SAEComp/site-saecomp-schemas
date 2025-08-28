import { z } from 'zod';

// Esquema de obtenção de parâmetros de entrada para obtenção das páginas de produtos
export const getProductPageInSchema = z.object({
    pageSize: z.coerce.number(),
    page: z.coerce.number(),
});

// Tipo do typescript
export type ICGetProductPageInSchema = z.infer<typeof getProductPageInSchema>;