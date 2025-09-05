import { z } from "zod";

// Esquema intermediário para item do carrinho
const itemSchema = z.object({
    id: z.coerce.number().min(1),
    productId: z.coerce.number(),
    productName: z.string().min(1),
    productStock: z.coerce.number().min(1),
    quantity: z.coerce.number().min(1),
    value: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
});

// Esquema de saída para produtos
export const getCartOutSchema = z.object({
    id: z.coerce.number(),
    changed: z.coerce.boolean(),
    totalValue: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
    items: z.array(itemSchema).min(0),
});


// Tipo typescript
export type ICGetCartOutSchema = z.infer<typeof getCartOutSchema>