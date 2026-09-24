import {Router} from "express";
import AuthController from "./auth.controller.ts";


const router: Router = Router();
const auth = new AuthController();

//Authenticated route
router.post("/auth_user", auth.auth);


export default router;