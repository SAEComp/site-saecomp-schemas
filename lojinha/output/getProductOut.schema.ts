import { z } from "zod";

// Esquema de saída para produtos
export const getProductOutSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    value: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ),
    description: z.string(),
    quantity: z.coerce.number(),
    barCode: z.string().length(13, {message: 'bar_code deve ter exatamente 13 caracteres'}).optional().nullable(),
    imgUrl: z.string().optional().nullable(),
    category: z.enum(['sweet', 'salty', 'drink']),
});


// Tipo typescript
export type ICGetProductOutSchema = z.infer<typeof getProductOutSchema>