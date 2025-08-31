import { z } from "zod";

// Esquema de edição produtos
export const editProductInSchema = z.object({
    id: z.coerce.number(),
    name: z.string().optional(),
    value: z.coerce.number().optional(),
    description: z.string().optional(),
    quantity: z.coerce.number().optional(),
    bar_code: z.string().length(13, {message: 'bar_code deve ter exatamente 13 caracteres'}).optional(),
    img_url: z.string().optional(),
    category: z.enum(['sweet', 'salty', 'drink']).optional(),
});


// Tipo typescript
export type ICEditProductInSchema = z.infer<typeof editProductInSchema>