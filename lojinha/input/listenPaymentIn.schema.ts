import {z} from "zod";

export const listenPaymentInSchema = z.object({
    paymentId: z.coerce.number().int().positive(),
});

export type ICListenPaymentInSchema = z.infer<typeof listenPaymentInSchema>;