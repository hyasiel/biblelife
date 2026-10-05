import {type Request, type Response} from "express";

import UserServices from "./users.service.ts"

const user = new UserServices();

export default class userController {

    async createUser(req: Request, res: Response){
        
        console.log(req.body);

        user.createUser(req.body)
    };


    async deleteUser(req: Request, res: Response){};
    async getInfoUser(req: Request, res: Response){};


    async getRacha(req: Request, res: Response){
        res.send({racha: 3});
    }
}