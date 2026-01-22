import { z } from "zod";

// Esquema de entrada para novos produtos
export const addProductInSchema = z.object({
    name: z.string(),
    value: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
    description: z.string(),
    quantity: z.coerce.number(),
    barCode: z.string().length(13, {message: 'bar_code deve ter exatamente 13 caracteres'}).optional(),
    imgUrl: z.string().optional(),
    category: z.enum(['sweet', 'salty', 'drink']),
    isActive: z
        .preprocess((value) => {
            if (typeof value === 'boolean') {
                return value;
            }
            if (typeof value === 'string') {
                const normalized = value.trim().toLowerCase();
                if (normalized === 'true' || normalized === '1') {
                    return true;
                }
                if (normalized === 'false' || normalized === '0') {
                    return false;
                }
            }
            if(typeof value === 'number'){
                if(value === 1) return true;
                if(value === 0) return false;
            }
            return value;
        }, z.boolean())
        .optional()
        .default(true)
});


// Tipo typescript
export type ICAddProductInSchema = z.infer<typeof addProductInSchema>