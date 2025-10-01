import {z} from "zod";

export const getPunctuationInSchema = z.object({
    userId: z.coerce.number().int().positive()
})

export type ICGetPunctuationInSchema = z.infer<typeof getPunctuationInSchema>;