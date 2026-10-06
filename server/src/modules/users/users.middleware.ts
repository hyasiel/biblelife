import {type Request, type Response, type NextFunction} from "express";
import {createUserSchema} from "./users.schema.ts"

export function userMiddleware (req: Request, res: Response, next: NextFunction) {
    const schema = createUserSchema.safeParse(req.body);

    if(!schema.success) {
        return res.status(400).json({error: schema.error});
    }
    
    req.body = schema.data;

    next();
}