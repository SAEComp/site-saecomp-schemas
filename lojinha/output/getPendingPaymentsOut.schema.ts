import { z } from "zod";

// Esquema individual de item em um pedido de compra
export const itemOrderSchema = z.object({
    id: z.coerce.number().min(1),
    productName: z.string(),
    quantity: z.coerce.number().min(1),
    value: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
});

// Esquema individual de pedido de compra (com itens embutidos)
export const buyOrderSchema = z.object({
    id: z.coerce.number().min(1),
    totalValue: z.number().refine(val => Number.isFinite(val) && /^\d+(\.\d{1,2})?$/.test(val.toString()), {message: "O valor deve ter no máximo 2 casas decimais"}),
    paymentId: z.coerce.number(),
    qrCodeBase64: z.string(),     
    pixCopiaECola: z.string(),     
    item: z.array(itemOrderSchema).min(1)
});


// Esquema de entrada para  pedidos pendentes de pagamento
export const getPendingPaymentOutSchema = z.object({
    buyOrder: z.array(buyOrderSchema).min(0),
});

// Tipo typescript
export type ICGetPendingPaymentOutSchema = z.infer<typeof getPendingPaymentOutSchema>
