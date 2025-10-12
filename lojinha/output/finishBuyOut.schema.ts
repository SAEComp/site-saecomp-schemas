import { z } from "zod";

export const paymentData = z.object({
    paymentId: z.coerce.number(),
    qrCodeBase64: z.string(),     
    pixCopiaECola: z.string(),     
});

export const finishBuyOutSchema = z.object({
    totalValue: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ),     
    paymentData: paymentData,     
});

export type ICFinishBuyOutSchema = z.infer<typeof finishBuyOutSchema>;
export type ICPaymentData = z.infer<typeof paymentData>