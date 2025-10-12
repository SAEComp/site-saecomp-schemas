import { z } from "zod";

// Schema de entrada para paginação e filtros opcionais
export const getEntryHistoryPageInSchema = z.object({
    page: z.coerce.number().min(1),
    pageSize: z.coerce.number().min(1),
    productName: z.string().optional(),
    minValue: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ).optional(),
    maxValue: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ).optional(),
    minQuantity: z.coerce.number().min(0).optional(),
    maxQuantity: z.coerce.number().min(0).optional(),
    dateMin: z.coerce.date().optional(),
    dateMax: z.coerce.date().optional()
});

// TypeScript type para o schema de entrada
export type ICGetEntryHistoryPageInSchema = z.infer<typeof getEntryHistoryPageInSchema>;