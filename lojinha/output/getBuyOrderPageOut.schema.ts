import { z } from "zod";

// Esquema individual de item em um pedido de compra
const itemSchema = z.object({
    productName: z.string(),
    quantity: z.coerce.number().min(1),
    value: z.coerce.number().min(0),
});

// Esquema individual de pedido de compra na página de saída
const buyOrderSchema = z.object({
    id: z.coerce.number().min(1),
    userName: z.string(),
    date: z.coerce.date(),
    status: z.enum(['cart', 'pendingPayment', 'canceled' ,'finishedPayment']),
    totalValue: z.coerce.number(),
    item: itemSchema.array()
});

// Esquema de entrada para paginação de pedidos de compra
export const getBuyOrderPageOutSchema = z.object({
    buyOrder: z.array(buyOrderSchema).min(0),
});

// Tipo typescript
export type ICGetBuyOrderPageOutSchema = z.infer<typeof getBuyOrderPageOutSchema>
