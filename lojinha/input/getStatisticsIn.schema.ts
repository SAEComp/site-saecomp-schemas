import { z } from "zod";

// Esquema de entrada para obtençaõ de estatísticas
export const getStatisticsInSchema = z.object({
    moreSoldQnt: z.coerce.number().min(1),
    moreRevenueQnt: z.coerce.number().min(1)
});


// Tipo typescript
export type ICGetStatisticsInSchema = z.infer<typeof getStatisticsInSchema>