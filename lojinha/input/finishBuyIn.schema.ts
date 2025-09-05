import { z } from "zod";

export const finishBuyInSchema = z.object({
    buyOrderId: z.coerce.number()
});

export type ICFinishBuyInSchema = z.infer<typeof finishBuyInSchema>;