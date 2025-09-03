import { z } from "zod";

// Schema de entrada para paginação e filtros opcionais
export const getEntryHistoryPageInSchema = z.object({
    page: z.coerce.number().min(1),
    pageSize: z.coerce.number().min(1),
    productName: z.string().optional(),
    value: z.number().optional(),
    quantity: z.coerce.number().optional(),
    date: z.coerce.date().optional()
});

// TypeScript type para o schema de entrada
export type ICGetEntryHistoryPageInSchema = z.infer<typeof getEntryHistoryPageInSchema>;