import z from "zod";

export const addPixKeyInSchema = z.object({
    nameAccount: z.string().min(1, "O nome da conta é obrigatório"),
    pixKey: z.string().min(1, "A chave é obrigatória"),
    cityAccount: z.string().min(1, "A cidade é obrigatória"),
    tokenAccount: z.string().min(1, "O token é obrigatório"),
});

export type ICAddPixKeyInSchema = z.infer<typeof addPixKeyInSchema>;