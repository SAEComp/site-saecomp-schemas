import { z } from 'zod';

export const subjectSchema = z.object({
    code: z.string(),
    name: z.string(),
});

export type Subject = z.infer<typeof subjectSchema>;
