import { z } from 'zod';
import { subjectGroupSchema } from './subjectGroup.schema';

export const emphasisSchema = z.object({
    id: z.int(),
    name: z.string(),
    description: z.string().optional(),
    requirements: z.string().optional(),
    subjects: z.array(subjectGroupSchema),
});

export type Emphasis = z.infer<typeof emphasisSchema>;
