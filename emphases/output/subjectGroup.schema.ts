import { z } from 'zod';
import { subjectSchema } from './subject.schema';

export const subjectGroupSchema = z.object({

    name: z.string().optional,
    subjects: z.array(subjectSchema)
});

export type SubjectGroup = z.infer<typeof subjectGroupSchema>;
