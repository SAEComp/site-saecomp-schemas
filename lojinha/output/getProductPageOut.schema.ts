import { z } from "zod";

// Esquema intermediário para produtos
export const productSchema = z.object({
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
    isActive: z.coerce.boolean()
});

// Esquema de saída para array de produtos
export const getProductPageOutSchema = z.object({
    product: z.array(productSchema).min(0)
});

// Tipo typescript
export type ICGetProductPageOutSchema = z.infer<typeof getProductPageOutSchema>
