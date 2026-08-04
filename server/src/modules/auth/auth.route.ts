import {Router, type Request, type Response} from "express";
import { emitWarning } from "node:process";

const router: Router = Router();


router.get("/auth_user", (req: Request, res: Response)=>{
    
    const value = req.query.id;


    res.send("the id is: " + value);
});


export default router;