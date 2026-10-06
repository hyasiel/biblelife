import {Router} from "express";
import userController from "./users.controller.ts"
import {userMiddleware} from "./users.middleware.ts"

const router: Router = Router();

const user = new userController();



router.post("/u/create", userMiddleware, user.createUser)

router.delete("/u/rm", user.deleteUser)

router.get("/u/racha", user.getRacha)


export default router;