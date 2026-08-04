import dotenv from "dotenv";
import express from "express";

import router from "./routes/index.route.ts";


dotenv.config();
const app = express();

app.use(express.json());
app.use(router);


app.listen(process.env.BACK_PORT, ()=>{
    console.log("app running on " + process.env.BACK_PORT);
})
