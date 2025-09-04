import { z } from "zod";

// Schema para entrada de dados para registrar pagamento
export const registerPaymentInSchema = z.object({
    buyOrderId: z.coerce.number()
});

// Tipo TypeScript
export type ICRegisterPaymentInSchema = z.infer<typeof registerPaymentInSchema>;