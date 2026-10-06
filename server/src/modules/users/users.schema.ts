import {z} from "zod";

export const createUserSchema = z.object({
    name: z.string().min(2),
    email: z.email(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8)
})
.refine(
    (data) => data.password === data.passwordConfirm, {
        message: "las claves no coinciden",
        path: ["passwordConfirm"]
    }
)