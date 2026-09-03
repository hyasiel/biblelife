import {type Request, type Response} from "express";



export default class userController {
    getRacha(req: Request, res: Response){
        res.send({racha: 3});
    }
}