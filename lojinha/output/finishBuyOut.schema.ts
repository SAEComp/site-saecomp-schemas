import { z } from "zod";

export const paymentData = z.object({
    qrCodeBase64: z.string(),     
    pixCopiaECola: z.string(),     
});

export const finishBuyOutSchema = z.object({
    totalValue: z.coerce.number().min(0),     
    //paymentData: paymentData,     
});

export type ICFinishBuyOutSchema = z.infer<typeof finishBuyOutSchema>;