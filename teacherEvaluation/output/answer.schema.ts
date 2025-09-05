import { z } from 'zod';
import questionTypes from '../questionTypes';

const publicAnswersSchema = z.object({
    classId: z.coerce.number().int().positive("O ID da avaliação deve ser um número inteiro positivo."),
    teacherName: z.string().min(3, "O nome do professor deve ter pelo menos 3 caracteres."),
    teacherId: z.coerce.number().int().positive("O ID do professor deve ser um número inteiro positivo."),
    courseName: z.string().min(3, "O nome do curso deve ter pelo menos 3 caracteres."),
    courseCode: z.string().min(3, "O código do curso deve ter pelo menos 3 caracteres."),
    courseId: z.coerce.number().int().positive(),
    averageScore: z.number().nullable(),
    instituteName: z.string(),
    instituteCode: z.string(),
    departmentName: z.string(),
    departmentCode: z.string(),
    semesterCode: z.string()
});

export type PublicAnswer = z.infer<typeof publicAnswersSchema>;

export const getPublicAnswersOutSchema = z.object({
    isLastPage: z.boolean(),
    teacherGeneralInfo: z.array(publicAnswersSchema)
});

export type GetPublicAnswersOut = z.infer<typeof getPublicAnswersOutSchema>;

const publicEvaluationDetailsSchema = z.object({
    classId: z.coerce.number().int().positive("O ID da avaliação deve ser um número inteiro positivo."),
    teacherName: z.string().min(3, "O nome do professor deve ter pelo menos 3 caracteres."),
    teacherId: z.coerce.number().int().positive("O ID do professor deve ser um número inteiro positivo."),
    courseName: z.string().min(3, "O nome do curso deve ter pelo menos 3 caracteres."),
    courseCode: z.string().min(3, "O código do curso deve ter pelo menos 3 caracteres."),
    courseId: z.coerce.number().int().positive("O ID do curso deve ser um número inteiro positivo."),
    instituteName: z.string(),
    instituteCode: z.string(),
    departmentName: z.string(),
    departmentCode: z.string(),
    averageScore: z.number().nullable(),
});

export type PublicEvaluationDetails = z.infer<typeof publicEvaluationDetailsSchema>;

const publicAnswerDetailsSchema = z.object({
    classId: z.coerce.number().int().positive("O ID da avaliação deve ser um número inteiro positivo."),
    evaluationId : z.coerce.number().int().positive("O ID da avaliação deve ser um número inteiro positivo."),
    questionId: z.coerce.number().int().positive("O ID da pergunta deve ser um número inteiro positivo."),
    questionType: z.enum(questionTypes),
    question: z.string().min(3, "A pergunta deve ter pelo menos 3 caracteres."),
    answerText: z.string().nullable()
});

export type PublicAnswerDetails = z.infer<typeof publicAnswerDetailsSchema>;

export const getPublicAnswerDetailsOutSchema = z.object({
    answers: z.array(publicAnswerDetailsSchema)
});

export type GetPublicAnswerDetailsOut = z.infer<typeof getPublicAnswerDetailsOutSchema>;