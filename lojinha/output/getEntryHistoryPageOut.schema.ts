import { z } from "zod";

// Schema inerente a cada entrada no histórico
const entryHistorySchema = z.object({
    id: z.coerce.number().min(1),
    productId: z.coerce.number().min(1),
    productName: z.string(),
    value: z.coerce.number(),
    quantity: z.coerce.number(),
    date: z.coerce.date()
});

// Schema de saída
export const getEntryHistoryPageOutSchema = z.object({
    entryHistory: z.array(entryHistorySchema).min(0)
});

// TypeScript type para o schema de saída
export type ICGetEntryHistoryPageOutSchema = z.infer<typeof getEntryHistoryPageOutSchema>;



