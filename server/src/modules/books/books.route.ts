import {Router} from "express";
import bookController from "./books.controller.ts"

const router: Router = Router();

const book = new bookController();

//get specific verse and chapter of book
router.post("/getBook", book.getVerse);


export default router;