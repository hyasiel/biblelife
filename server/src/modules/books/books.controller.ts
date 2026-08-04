import {type Request, type Response} from "express";

export default class bookController {
    
    async getVerse (req: Request, res: Response) {

        await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${req.query.bb}/books/${req.query.b}/chapters/${req.query.c}/verses/${req.query.v}.json`)
        .then((response)=>{
           return response.json();
        })
        .then((data)=>{
            console.log(data);
            res.send(data);
        })
    }
}