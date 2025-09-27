import z from "zod";

export const getPixKeyOutSchema = z.object({
    id: z.coerce.number().min(1),
    nameAccount: z.string().min(1, "O nome da conta é obrigatório"),
    pixKey: z.string().min(1, "A chave é obrigatória"),
    cityAccount: z.string().min(1, "A cidade é obrigatória"),
    tokenAccount: z.string().min(1, "O token é obrigatório"),
}); 

export type ICGetPixKeyOutSchema = z.infer<typeof getPixKeyOutSchema>;