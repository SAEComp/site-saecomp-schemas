import { z } from "zod";

// Esquema de saída para produtos
export const getBuyOrderOutSchema = z.object({
    id: z.coerce.number(),
    user_id: z.coerce.number(),
    date: z.coerce.date(),
    status: z.enum(['cart', 'pendingPayment', 'finishedPayment']),
});


// Tipo typescript
export type ICGetBuyOrderOutSchema = z.infer<typeof getBuyOrderOutSchema>