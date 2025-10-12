import {z} from "zod";

export const getPunctuationPageInSchema = z.object({
    page: z.coerce.number().int().min(1, {message: 'Número mínimo de páginas é 1'}),
    pageSize: z.coerce.number().int().min(1, {message: 'Tamanho mínimo de página é 1'}),
    name: z.string().optional(),
    minPunctuation: z.coerce.number().int().positive().optional(),
    maxPunctuation: z.coerce.number().int().positive().optional(),
})

export type ICGetPunctuationPageInSchema = z.infer<typeof getPunctuationPageInSchema>;