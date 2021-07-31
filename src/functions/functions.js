import bcrypt from "bcrypt";

let hashPassword=(password)=>{
    

        const saltRounds = 10;
        const myPlaintextPassword = password;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(myPlaintextPassword, salt);
        return hash
  
}

module.exports = {hashPassword,}