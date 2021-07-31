import express  from "express";
import { getHomePage,createUser,CRUD } from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app)=>{
     router.get('/',getHomePage)
     router.get('/create-user',createUser)
     router.post('/CRUD',CRUD)

    
    return app.use("/",router);
 }

 module.exports = initWebRoutes;