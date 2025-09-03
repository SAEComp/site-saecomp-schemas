import { z } from "zod";

// Esquema de saída para produtos
export const getProductPageOutSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    value: z.coerce.number(),
    description: z.string(),
    quantity: z.coerce.number(),
    bar_code: z.string().optional(),
    img_url: z.string(),
    category: z.enum(['sweet', 'salty', 'drink']),
});

// Esquema de saída para array de produtos
export const getProductPageOutArraySchema = getProductPageOutSchema.array();

// Tipo typescript
export type ICGetProductPageOutSchema = z.infer<typeof getProductPageOutSchema>

// Tipo typescript para array
export type ICGetProductPageOutArraySchema = z.infer<typeof getProductPageOutArraySchema>;