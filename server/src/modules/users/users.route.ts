import {Router} from "express";
import userController from "./users.controller.ts"
const router: Router = Router();

const user = new userController();



router.get("/u/create", user.createUser)

router.get("/u/rm", user.deleteUser)

router.get("/u/racha", user.getRacha)


export default router;