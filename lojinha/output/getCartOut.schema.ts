import { z } from "zod";

// Esquema intermediário para item do carrinho
export const itemCartSchema = z.object({
    id: z.coerce.number().min(1),
    productId: z.coerce.number(),
    productName: z.string().min(1),
    productStock: z.coerce.number().min(1),
    quantity: z.coerce.number().min(1),
    value: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    )
});

// Esquema de saída para produtos
export const getCartOutSchema = z.object({
    id: z.coerce.number(),
    changed: z.coerce.boolean(),
    totalValue: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ),
    items: z.array(itemCartSchema).min(0),
});


// Tipo typescript
export type ICGetCartOutSchema = z.infer<typeof getCartOutSchema>