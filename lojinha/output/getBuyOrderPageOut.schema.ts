import { z } from "zod";

// Esquema de entrada para paginação de pedidos de compra
export const getBuyOrderPageOutSchema = z.object({
    id: z.coerce.number(),
    user_id: z.coerce.number(),
    date: z.coerce.date(),
    status: z.enum(['cart', 'pendingPayment', 'canceled' ,'finishedPayment']),
});

// Vetor do esquema de saída
export const getBuyOrderPageOutArraySchema = getBuyOrderPageOutSchema.array(); 

// Tipo typescript
export type ICGetBuyOrderPageOutSchema = z.infer<typeof getBuyOrderPageOutSchema>

// Tipo typescript do vetor
export type ICGetBuyOrderPageOutArraySchema = z.infer<typeof getBuyOrderPageOutArraySchema>