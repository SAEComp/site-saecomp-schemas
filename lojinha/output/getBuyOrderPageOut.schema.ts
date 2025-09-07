import { z } from "zod";

// Esquema individual de item em um pedido de compra
export const itemOrderSchema = z.object({
    productName: z.string(),
    quantity: z.coerce.number().min(1),
    value: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
});

// Esquema individual de pedido de compra na página de saída
export const buyOrderSchema = z.object({
    id: z.coerce.number().min(1),
    userName: z.string(),
    date: z.coerce.date(),
    status: z.enum(['cart', 'pendingPayment', 'canceled' ,'finishedPayment']),
    totalValue: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
    item: itemOrderSchema.array()
});

// Esquema de entrada para paginação de pedidos de compra
export const getBuyOrderPageOutSchema = z.object({
    buyOrder: z.array(buyOrderSchema).min(0),
});

// Tipo typescript
export type ICGetBuyOrderPageOutSchema = z.infer<typeof getBuyOrderPageOutSchema>
