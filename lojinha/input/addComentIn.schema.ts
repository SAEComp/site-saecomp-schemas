import { z } from "zod";

// Esquema de entrada de comentários
export const addCommentInSchema = z.object({
    user_id: z.coerce.number(),
    comment: z.string()
});

// Tipo typescript
export type ICAddCommentInSchema = z.infer<typeof addCommentInSchema>;