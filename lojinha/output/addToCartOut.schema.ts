import { z } from "zod";

// Esquema de entrada para adição/atualização de produtos no carrinho do cliente
export const addToCartOutSchema = z.object({
    buyOrderId: z.coerce.number(),
    insufficientStock: z.coerce.boolean()
});

// Tipo do typescript
export type ICAddToCartOutSchema = z.infer<typeof addToCartOutSchema> ;