import { z } from "zod";

// Schema de entrada para paginação e filtros opcionais
export const getEntryHistoryPageInSchema = z.object({
    page: z.coerce.number().min(1),
    pageSize: z.coerce.number().min(1),
    productName: z.string().optional(),
    value: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}).optional(),
    quantity: z.coerce.number().min(0).optional(),
    dateMin: z.coerce.date().optional(),
    dateMax: z.coerce.date().optional()
});

// TypeScript type para o schema de entrada
export type ICGetEntryHistoryPageInSchema = z.infer<typeof getEntryHistoryPageInSchema>;