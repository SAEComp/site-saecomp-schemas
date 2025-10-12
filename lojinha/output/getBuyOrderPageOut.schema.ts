import { z } from "zod";

// Esquema individual de item em um pedido de compra
export const itemOrderSchema = z.object({
    productName: z.string(),
    quantity: z.coerce.number().min(1),
    value: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ),
});

// Esquema individual de pedido de compra na página de saída
export const buyOrderSchema = z.object({
    id: z.coerce.number().min(1),
    userName: z.string(),
    date: z.coerce.date(),
    status: z.enum(['cart', 'pendingPayment', 'canceled' ,'finishedPayment']),
    totalValue: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ),
    item: itemOrderSchema.array()
});

// Esquema de entrada para paginação de pedidos de compra
export const getBuyOrderPageOutSchema = z.object({
    buyOrder: z.array(buyOrderSchema).min(0),
});

// Tipo typescript
export type ICGetBuyOrderPageOutSchema = z.infer<typeof getBuyOrderPageOutSchema>
