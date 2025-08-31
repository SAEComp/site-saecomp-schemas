import { z } from "zod";

// Esquema de saída para produtos
export const getProductOutSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    value: z.coerce.number(),
    description: z.string(),
    quantity: z.coerce.number(),
    bar_code: z.string().optional(),
    category: z.enum(['sweet', 'salty', 'drink']),
});


// Tipo typescript
export type ICGetProductOutSchema = z.infer<typeof getProductOutSchema>