import {z} from "zod";

export const punctuationData = z.object({
    userId: z.coerce.number().int().positive(),
    userName: z.string(),
    userPunctuation: z.coerce.number().int().positive(),
});

export const getPunctuationPageOutSchema = z.object({
    punctuation: z.array(punctuationData).min(0)
})

export type ICGetPunctuationPageOutSchema = z.infer<typeof getPunctuationPageOutSchema>;