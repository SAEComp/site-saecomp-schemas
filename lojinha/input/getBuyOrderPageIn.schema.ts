import { z } from "zod";

// Esquema de entrada para paginação de pedidos de compra
export const getBuyOrderPageInSchema = z.object({
    page_size: z.coerce.number(),
    page: z.coerce.number(),
    status: z.enum(['cart', 'pendingPayment', 'finishedPayment']).optional()
});


// Tipo typescript
export type ICGetBuyOrderPageInSchema = z.infer<typeof getBuyOrderPageInSchema>