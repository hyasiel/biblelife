import {Router} from "express";
import AuthController from "./auth.controller.ts";


const router: Router = Router();
const auth = new AuthController();

//Authenticated route
router.post("/login_user", auth.login);

export default router;