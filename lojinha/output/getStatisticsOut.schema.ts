import { z } from "zod";

// Esquema intermediário para item do carrinho
export const productsStatisticsSchema = z.object({
    id: z.coerce.number().min(1),
    name: z.string(),
    soldQuantity: z.coerce.number().min(0),
    revenueValue: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
});

// Esquema de saída para produtos
export const getStatisticsOutSchema = z.object({
    totalRevenueValue: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
    totalOrders: z.coerce.number().min(0),
    pendingOrders: z.coerce.number().min(0),
    completedOrders: z.coerce.number().min(0),
    canceledOrders: z.coerce.number().min(0),
    stockProducts: z.coerce.number().min(0),
    stockItems: z.coerce.number().min(0),
    productsWithMoreSoldQuantity:  z.array(productsStatisticsSchema).min(0),
    productsWithMoreRevenueValue:  z.array(productsStatisticsSchema).min(0),
});


// Tipo typescript
export type ICGetStatisticsOutSchema = z.infer<typeof getStatisticsOutSchema>