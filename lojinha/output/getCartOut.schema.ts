import { z } from "zod";

// Esquema intermediário para item do carrinho
const itemSchema = z.object({
    productId: z.coerce.number(),
    productName: z.string().min(1),
    productStock: z.coerce.number().min(1),
    quantity: z.coerce.number().min(1),
    value: z.coerce.number().min(0.01),
});

// Esquema de saída para produtos
export const getCartOutSchema = z.object({
    id: z.coerce.number(),
    changed: z.coerce.boolean(),
    totalValue: z.coerce.number().min(0.01),
    items: z.array(itemSchema).min(0),
});


// Tipo typescript
export type ICGetCartOutSchema = z.infer<typeof getCartOutSchema>