import { z } from 'zod';
import questionTypes from '../questionTypes';

const classesSchema = z.object({
    classId: z.coerce.number().int().positive("O ID da turma deve ser um número inteiro positivo."),
    teacherId: z.coerce.number().int().positive("O ID do professor deve ser um número inteiro positivo."),
    teacherName: z.string().min(3, "O nome do professor deve ter pelo menos 3 caracteres."),
    courseId: z.coerce.number().int().positive("O ID do curso deve ser um número inteiro positivo."),
    courseName: z.string().min(3, "O nome do curso deve ter pelo menos 3 caracteres."),
    courseCode: z.string().min(3, "O código do curso deve ter pelo menos 3 caracteres.")
});

export type Classes = z.infer<typeof classesSchema>;

export const getClassesOutSchema = z.object({
    results: z.array(classesSchema)
});

export const getActiveQuestionsOutSchema = z.object({
    questions: z.array(z.object({
        id: z.coerce.number().int().positive("O ID da pergunta deve ser um número inteiro positivo."),
        question: z.string().min(3, "A pergunta deve ter pelo menos 3 caracteres."),
        type: z.enum(questionTypes),
        order: z.coerce.number().int().positive("A ordem da pergunta deve ser um número inteiro positivo."),
        required: z.boolean(),
    }))
});

export type ActiveQuestions = z.infer<typeof getActiveQuestionsOutSchema>['questions'];


const teacherSchema = z.object({
    teacherId: z.coerce.number().int().positive("O ID do professor deve ser um número inteiro positivo."),
    teacherName: z.string().min(3, "O nome do professor deve ter pelo menos 3 caracteres."),
});

export type Teacher = z.infer<typeof teacherSchema>;

export const getTeachersOutSchema = z.object({
    teachers: z.array(teacherSchema)
});

const coursesSchema = z.object({
    courseId: z.coerce.number().int().positive("O ID do curso deve ser um número inteiro positivo."),
    courseName: z.string().min(3, "O nome do curso deve ter pelo menos 3 caracteres."),
    courseCode: z.string().min(3, "O código do curso deve ter pelo menos 3 caracteres."),
});

export type Course = z.infer<typeof coursesSchema>;

export const getCoursesOutSchema = z.object({
    courses: z.array(coursesSchema)
});
