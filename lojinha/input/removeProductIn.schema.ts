import { z } from "zod";

// Esquema de remoção produtos
export const removeProductInSchema = z.object({
    productId: z.coerce.number()
}); 

// Tipo Typescript
export type ICRemoveProductInSchema = z.infer<typeof removeProductInSchema>;