import { z } from "zod";

// Esquema de entrada de comentários
export const addCommentOutSchema = z.object({
    commentId: z.coerce.number().min(1)
});

// Tipo typescript
export type ICAddCommentOutSchema = z.infer<typeof addCommentOutSchema>;