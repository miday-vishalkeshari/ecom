const bcrypt = require('bcrypt')


const hashPassword = async (password)=>{
    try{
        const saltRound=10;
        const hashedPassword = await bcrypt.hash(password,saltRound);
        return hashedPassword;
    }
    catch(error){
        console.log( `error in authHelper see in file(authHelper.js) -->  ${error}`);
    }
}

//function to compare two password one normal text and other one is hashed one
 const comparePassword = async (password,hashedPassword) =>{
    return bcrypt.compare(password,hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
};