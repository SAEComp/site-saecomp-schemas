import { z } from "zod";

// Esquema intermediário para produtos
export const productSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    value: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
    description: z.string(),
    quantity: z.coerce.number(),
    barCode: z.string().length(13, {message: 'bar_code deve ter exatamente 13 caracteres'}).optional().nullable(),
    imgUrl: z.string().optional().nullable(),
    category: z.enum(['sweet', 'salty', 'drink']),
});

// Esquema de saída para array de produtos
export const getProductPageOutSchema = z.object({
    product: z.array(productSchema).min(0)
});

// Tipo typescript
export type ICGetProductPageOutSchema = z.infer<typeof getProductPageOutSchema>
