import { z } from "zod";

// Esquema de entrada para paginação de pedidos de compra
export const getBuyOrderPageInSchema = z.object({
    pageSize: z.coerce.number().min(1),
    page: z.coerce.number().min(1),
    status: z.enum(['cart', 'pendingPayment', 'canceled' ,'finishedPayment']).optional(),
    productName: z.string().or(z.array(z.string())).optional(),
    userName: z.string().optional(),
    totalValueMin: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ).optional(),
    totalValueMax: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ).optional(),
    dateMin: z.coerce.date().optional(),
    dateMax: z.coerce.date().optional(),
});


// Tipo typescript
export type ICGetBuyOrderPageInSchema = z.infer<typeof getBuyOrderPageInSchema>