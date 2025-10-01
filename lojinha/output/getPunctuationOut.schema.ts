import {z} from "zod";

export const getPunctuationOutSchema = z.object({
    userPunctuation: z.coerce.number().int().positive(),
    userName: z.string().min(1).max(100)
})

export type ICGetPunctuationOutSchema = z.infer<typeof getPunctuationOutSchema>;