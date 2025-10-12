import { z } from "zod";

// Schema para entrada de dados para registrar pagamento
export const cancelPaymentInSchema = z.object({
    buyOrderId: z.coerce.number()
});

// Tipo TypeScript
export type ICCancelPaymentInSchema = z.infer<typeof cancelPaymentInSchema>;