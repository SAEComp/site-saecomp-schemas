import { z } from "zod";

// Esquema de entrada para novos produtos
export const addProductInSchema = z.object({
    name: z.string(),
    value: z.coerce.number(),
    description: z.string(),
    quantity: z.coerce.number(),
    bar_code: z.string().length(13, {message: 'bar_code deve ter exatamente 13 caracteres'}).optional(),
    img_url: z.string(),
    category: z.enum(['sweet', 'salty', 'drink']),
});


// Tipo typescript
export type ICAddProductInSchema = z.infer<typeof addProductInSchema>