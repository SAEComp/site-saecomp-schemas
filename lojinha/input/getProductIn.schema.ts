import { z } from "zod";

// Esquema de saída para produtos
export const getProductInSchema = z.object({
    barCode: z.coerce.string().optional(),
    productId: z.coerce.number().optional()
});


// Tipo typescript
export type ICGetProductInSchema = z.infer<typeof getProductInSchema>