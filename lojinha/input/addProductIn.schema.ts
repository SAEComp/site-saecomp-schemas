import { z } from "zod";

// Esquema de entrada para novos produtos
export const addProductInSchema = z.object({
    name: z.string(),
    value: z.coerce.number(),
    description: z.string(),
    quantity: z.coerce.number(),
    barCode: z.string().length(13, {message: 'bar_code deve ter exatamente 13 caracteres'}).optional(),
    imgUrl: z.string().optional(),
    category: z.enum(['sweet', 'salty', 'drink']),
});


// Tipo typescript
export type ICAddProductInSchema = z.infer<typeof addProductInSchema>