import { z } from "zod";

// Esquema de entrada para adição/atualização de produtos no carrinho do cliente
export const deleteItemInSchema = z.object({
    itemId: z.coerce.number(),
});

// Tipo do typescript
export type ICDeleteItemInSchema = z.infer<typeof deleteItemInSchema> ;