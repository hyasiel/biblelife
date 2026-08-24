import {type Request, type Response} from "express";

export default class bookController {
    
    async getVerse (req: Request, res: Response) {
        await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${req.body.bb}/books/${req.body.b}/chapters/${req.body.c}/verses/${req.body.v}.json`)
        .then((response)=>{
           return response.text();
        })
        .then((data)=>{
            console.log(data);
            res.send(data);
        })
        .catch((e)=>{
            console.log("error: " + e);
        })
    }
}