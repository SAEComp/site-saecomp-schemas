import { z } from "zod";

// Esquema de saída para produtos
export const getCartOutSchema = z.object({
    id: z.coerce.number(),
    user_id: z.coerce.number(),
    date: z.coerce.date(),
    status: z.enum(['cart', 'pendingPayment', 'canceled' ,'finishedPayment']),
});


// Tipo typescript
export type ICGetCartOutSchema = z.infer<typeof getCartOutSchema>