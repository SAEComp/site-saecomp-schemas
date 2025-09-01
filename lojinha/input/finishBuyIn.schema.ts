import { z } from "zod";

export const finishBuyInSchema = z.object({
    buy_order_id: z.coerce.number()
});

export type ICFinishBuyInSchema = z.infer<typeof finishBuyInSchema>;