import db from './../models/index'

import {createNewUser,getAllUsers,findUserByID,DBUpdate,DBDelete} from './../services/CRUDService'

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

 let listUsers = async(req,res)=>{
     let data=await(getAllUsers());
    return res.render('listAllUsers.ejs',{userList:data})
 }

let edit = async(req,res)=>{
     let id=req.query.id;
     if(id){
        let data=await(findUserByID(id));
        console.log(data)
        res.render('editUser.ejs',{user:data})
     } else

    return res.send('ID not found')
 }
let updating = async(req,res)=>{
    let newList=await(DBUpdate(req.body))
    return res.render('listAllUsers.ejs',{userList:newList})
 }

 let deleteuser = async(req,res)=>{
     console.log('req.body:',req.query.id)
    let newList=await(DBDelete(req.query.id))
    return res.render('listAllUsers.ejs',{userList:newList})
 }
module.exports = {
    getHomePage,
    createUser,
    CRUD,
    listUsers,
    edit,
    updating,
    deleteuser

}