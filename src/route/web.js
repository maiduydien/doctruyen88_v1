import express  from "express";
import { getHomePage,createUser,CRUD,listUsers,edit,updating,deleteuser } from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app)=>{
     router.get('/',getHomePage)
     router.get('/create-user',createUser)
     router.post('/CRUD',CRUD)
     router.get('/list-users',listUsers)
     router.get('/edit',edit)
     router.post('/updating',updating)
     router.get('/delete',deleteuser)
    return app.use("/",router);
 }

 module.exports = initWebRoutes;