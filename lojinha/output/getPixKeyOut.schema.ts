import z from "zod";

export const getPixKeyOutSchema = z.object({
    nameAccount: z.string().min(1, "O nome da conta é obrigatório"),
    pixKey: z.string().min(1, "A chave é obrigatória"),
    cityAccount: z.string().min(1, "A cidade é obrigatória"),
    emailAccount: z.string().email("Email inválido").min(1, "O email é obrigatório"),
    tokenAccount: z.string().min(1, "O token é obrigatório"),
}); 

export type ICgetPixKeyOutSchema = z.infer<typeof getPixKeyOutSchema>;