import { z } from "zod";


export const addAttendanceInSchema = z.object({
    nusp: z.number(),
    meetingId: z.number()
});


// Tipo typescript
export type IAddAttendanceInSchema = z.infer<typeof addAttendanceInSchema>