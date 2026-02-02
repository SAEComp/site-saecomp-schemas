import {z} from "zod";

export const getPunctuationOutSchema = z.object({
    userPunctuation: z.coerce.number().int().nonnegative(),
    userName: z.string().min(0).max(100)
})

export type ICGetPunctuationOutSchema = z.infer<typeof getPunctuationOutSchema>;