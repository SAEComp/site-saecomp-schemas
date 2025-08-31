import { z } from "zod";

// Esquema de entrada para adição/atualização de produtos no carrinho do cliente
export const addToCartInSchema = z.object({
    product_id: z.coerce.number(),
    quantity: z.coerce.number()
});

// Tipo do typescript
export type ICAddToCartInSchema = z.infer<typeof addToCartInSchema> ;