const bcrypt = require('bcryptjs');

module.exports = {
    encryptPassword: async function (password){
        var hashed = await bcrypt.hash("password", 10);
        return(hashed);
    },
    verifyPassword: async function (data){
        var flag =  await bcrypt.compare(data.password, data.hash);
        return flag;
    }
}