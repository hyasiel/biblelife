import {type Request, type Response} from "express";



export default class userController {

    async createUser(req: Request, res: Response){};
    async deleteUser(req: Request, res: Response){};
    async getInfoUser(req: Request, res: Response){};


    async getRacha(req: Request, res: Response){
        res.send({racha: 3});
    }
}