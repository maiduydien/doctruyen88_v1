import {hashPassword} from './../functions/functions';
import db from './../models/index';
import DB from './../models/index'
let createNewUser= (data)=>{
    return new Promise(async(resolve,reject)=>{
        
        try{
            await(DB.User.create({
                name:data.name,
                info:data.info,
                email:data.email,
                roleid:data.roleid,
                gender:data.gender==='1' ? true : false,
                img: data.img,
                loginName:data.loginName,
                password:hashPassword(data.password)
            }))
            resolve('Tao du lieu thanh cong !')
        }
        catch(error){
            reject(error)
        }
    })
}
let getAllUsers = ()=>{
    return new Promise(async(resolve,result)=>{
        try{
            resolve(DB.User.findAll({
                raw:true,
                logging:false,
            }))
        }
        catch(e){
            console.log(e)
        }
    })
}

let findUserByID = (id)=>{
    return new Promise(async(resolve,result)=>{
        try{
            resolve(DB.User.findOne({
                raw:true,
                where:{id:id},
                logging:false,
            }))
        }
        catch(e){
            console.log(e)
        }
    })
}

let DBUpdate = (data)=>{
    return new Promise(async(resolve,result)=>{
        try{
            let updatingUser = await(DB.User.findOne({
                
                where:{id:data.id},
                }))
                console.log("updaing user",updatingUser)
            if (updatingUser){
                updatingUser.id=data.id;
                updatingUser.name=data.name;
                updatingUser.email=data.email;
                updatingUser.loginName=data.loginName;
                updatingUser.password=data.password;
                updatingUser.gender=data.gender==="1"?true:false;
                updatingUser.roleid=data.roleid;
                updatingUser.img=data.img;
                await updatingUser.save();
            }
            resolve(await(DB.User.findAll({raw:true})))
            }
        catch(e){
            console.log(e)
        }
    })
}

let DBDelete = (id)=>{
    return new Promise(async(resolve,result)=>{
        try{
            let deletingUser = await(DB.User.findOne({
                
                where:{id:id},
                }))
                console.log("deleting user",deletingUser)
            if (deletingUser){
               
                await deletingUser.destroy();
            }
            resolve(await(DB.User.findAll({raw:true})))
            }
        catch(e){
            console.log(e)
        }
    })
}
module.exports = {createNewUser,getAllUsers,findUserByID,DBUpdate,DBDelete}