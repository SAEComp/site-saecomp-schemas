import { date, z } from "zod";

// Esquema de entrada para paginação de pedidos de compra
export const getBuyOrderPageInSchema = z.object({
    pageSize: z.coerce.number().min(1),
    page: z.coerce.number().min(1),
    status: z.enum(['cart', 'pendingPayment', 'canceled' ,'finishedPayment']).optional(),
    productName: z.string().or(z.array(z.string())).optional(),
    userName: z.string().optional(),
    totalValueMin: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}).optional(),
    totalValueMax: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}).optional(),
    dateMin: z.coerce.date().optional(),
    dateMax: z.coerce.date().optional(),
});


// Tipo typescript
export type ICGetBuyOrderPageInSchema = z.infer<typeof getBuyOrderPageInSchema>