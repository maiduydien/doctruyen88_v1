import db from './../models/index'
import {hashPassword} from './../functions/functions'
import {createNewUser} from './../services/CRUDService'

let getHomePage =async(req,res)=>{
    try{
            let data= await db.User.findAll();
            return res.render('homePage.ejs',{data:JSON.stringify(data)})
        }
        catch (e)
        {
            console.log(e)
        }
}

let createUser=(req,res)=>{
    res.render('createUser.ejs')
 }

let CRUD=async(req,res)=>{
    let result= await(createNewUser(req.body))
    return res.send(result);
 }

module.exports = {
    getHomePage,
    createUser,
    CRUD,

}