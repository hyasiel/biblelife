import {Router} from "express";
import authRouter from "../modules/auth/auth.route.ts";
import bookRouter from "../modules/books/books.route.ts"

const router: Router = Router();


//auth route
router.use(authRouter);

router.use(bookRouter)


export default router;