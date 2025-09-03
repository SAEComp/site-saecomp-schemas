import { z } from "zod";

// Schema inerente a cada entrada no histórico
const entryHistorySchema = z.object({
    id: z.coerce.number().min(1),
    productId: z.coerce.number().min(1),
    productName: z.string(),
    value: z.string(),
    quantity: z.coerce.number().min(0),
    date: z.coerce.date()
});

// Schema de saída
export const getEntryHistoryPageOutSchema = entryHistorySchema.array();

// TypeScript type para o schema de saída
export type ICGetEntryHistoryPageOutSchema = z.infer<typeof getEntryHistoryPageOutSchema>;



