import {Router} from "express";
import userController from "./users.controller.ts"
const router: Router = Router();

const user = new userController();

//get racha
router.get("/u/racha", user.getRacha)


export default router;