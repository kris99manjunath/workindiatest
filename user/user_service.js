const pool = require("../config/database");
const { encryptPassword,verifyPassword } = require("../helperfns/encrypt_password")

module.exports = {
    create:async (data,callback) => {
        const password = await encryptPassword(data.password);
        console.log(data);
        pool.query(`INSERT INTO User(agent_id,password) VALUES(?,?)`,[data.agent_id,password],(err,result)=>{
            if(err)
            {
               return callback(err);
            }
            return callback(null,result);
        });
    },

    login: (data,callback) => {
        console.log("in service")
        pool.query(`SELECT password FROM User WHERE agent_id = ?`,[data.agent_id],(err,result)=>{
            if(err)
            {
               return callback(err);
            }
            console.log(result[0].password);
            //const verify =  verifyPassword({password:data.password,hash:result[0].password})
            return callback(null,result[0].password);
        });
    },
  
    
}