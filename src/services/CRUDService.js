import {hashPassword} from './../functions/functions';
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
module.exports = {createNewUser}