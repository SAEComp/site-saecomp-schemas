import { z } from "zod";

// Esquema de entrada para novos produtos
export const addProductOutSchema = z.object({
    productId: z.coerce.number().min(1),
});


// Tipo typescript
export type ICAddProductOutSchema = z.infer<typeof addProductOutSchema>