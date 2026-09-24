import {type Request, type Response} from "express";

export default class AuthController {

    async login (req: Request, res: Response) {
         const value = req.body.id;
         console.log(value)
         res.send(value);
    }
}

