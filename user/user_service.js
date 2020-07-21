const pool = require("../config/database");

module.exports = {
    create: (data,callback) => {
        pool.query(`INSERT INTO User(agent_id,password) VALUES(?,?)`,[data.agent_id,data.password],(err,result)=>{
            if(err)
            {
               return callback(err);
            }
            return callback(null,result);
        });
    },

    login: (data,callback) => {
        
        pool.query(`SELECT password FROM User WHERE agent_id = ?`,[data],(err,result)=>{
            if(err)
            {
               return callback(err);
            }
            return callback(null,result);
        });
    },
  
    
}