import { z } from "zod";

// Schema para entrada de dados para registrar pagamento
export const registerPaymentOutSchema = z.object({
    userScore: z.coerce.number().min(0)
});

// Tipo TypeScript
export type ICRegisterPaymentOutSchema = z.infer<typeof registerPaymentOutSchema>;