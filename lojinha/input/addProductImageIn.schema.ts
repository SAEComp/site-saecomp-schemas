import { z } from "zod";

// Esquema de entrada para novos produtos
export const addProductImageInSchema = z.object({
    productId: z.coerce.number().min(1)
});


// Tipo typescript
export type ICAddProductImageInSchema = z.infer<typeof addProductImageInSchema>