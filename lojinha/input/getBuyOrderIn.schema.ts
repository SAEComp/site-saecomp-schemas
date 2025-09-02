import { z } from "zod";

// Esquema de entrada para obtenção de pedido de compra
export const getBuyOrderInSchema = z.object({
    buy_order_id: z.coerce.number().optional(),
    status: z.enum(['cart', 'pendingPayment', 'finishedPayment']).optional()
});

// Tipo typescript
export type ICGetBuyOrderInSchema = z.infer<typeof getBuyOrderInSchema>