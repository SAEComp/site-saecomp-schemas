import { z } from "zod";

// Esquema de saída para produtos
export const getProductInSchema = z.object({
    bar_code: z.coerce.string().optional(),
    product_id: z.coerce.number().optional()
});


// Tipo typescript
export type ICGetProductInSchema = z.infer<typeof getProductInSchema>