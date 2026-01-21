import { z } from "zod";

// Esquema intermediário para item do carrinho
export const productsStatisticsSchema = z.object({
    id: z.coerce.number().min(1),
    name: z.string(),
    soldQuantity: z.coerce.number().min(0),
    revenueValue: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ),
});

// Esquema de saída para produtos
export const getStatisticsOutSchema = z.object({
    totalRevenueValue: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ),
    totalOrders: z.coerce.number().min(0),
    finishedOrders: z.coerce.number().min(0),
    canceledOrders: z.coerce.number().min(0),
    stockProducts: z.coerce.number().min(0),
    maxPotentialRevenue: z.preprocess(
        (val) => typeof val === "string" ? Number(val) : val,
        z.coerce.number().transform(v => Math.round(v * 100) / 100)
    ),
    soldItems: z.coerce.number().min(0),
    productsWithMoreSoldQuantity:  z.array(productsStatisticsSchema).min(0),
    productsWithMoreRevenueValue:  z.array(productsStatisticsSchema).min(0),
});


// Tipo typescript
export type ICGetStatisticsOutSchema = z.infer<typeof getStatisticsOutSchema>