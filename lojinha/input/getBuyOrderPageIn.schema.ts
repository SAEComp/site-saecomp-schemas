import { date, z } from "zod";

// Esquema de entrada para paginação de pedidos de compra
export const getBuyOrderPageInSchema = z.object({
    pageSize: z.coerce.number().min(1),
    page: z.coerce.number().min(1),
    status: z.enum(['cart', 'pendingPayment', 'canceled' ,'finishedPayment']).optional(),
    userName: z.string().optional(),
    totalValueMin: z.coerce.number().optional(),
    totalValueMax: z.coerce.number().optional(),
    dateMin: z.coerce.date().optional(),
    dateMax: z.coerce.date().optional(),
});


// Tipo typescript
export type ICGetBuyOrderPageInSchema = z.infer<typeof getBuyOrderPageInSchema>