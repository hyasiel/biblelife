import {Router} from "express";
import authRouter from "../modules/auth/auth.route.ts";
import bookRouter from "../modules/books/books.route.ts"
import usersRouter from "../modules/users/users.route.ts";
const router: Router = Router();


//auth route
router.use(authRouter);

router.use(bookRouter)

router.use(usersRouter);


export default router;