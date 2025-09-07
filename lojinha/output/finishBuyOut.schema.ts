import { z } from "zod";

export const paymentData = z.object({
    qrCodeBase64: z.string(),     
    pixCopiaECola: z.string(),     
});

export const finishBuyOutSchema = z.object({
    totalValue: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),     
    paymentData: paymentData,     
});

export type ICFinishBuyOutSchema = z.infer<typeof finishBuyOutSchema>;