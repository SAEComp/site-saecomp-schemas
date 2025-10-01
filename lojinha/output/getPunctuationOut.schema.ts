import {z} from "zod";

export const getPunctuationOutSchema = z.object({
    userPunctuation: z.coerce.number().int().positive()
})

export type ICGetPunctuationOutSchema = z.infer<typeof getPunctuationOutSchema>;