const pool = require("../config/database");

module.exports = {
    create: (data,callback) => {
        
        pool.query(`INSERT INTO Todo (agent_id ,title, description ,category ,due_date) VALUES(?,?,?,?,?)`,[data.agent_id,data.title,data.description,data.category,data.due_date],(err,result)=>{
            if(err)
            {
               return callback(err);
            }
            return callback(null,result);
        });
    },
    read: (id,callback) => {
        pool.query(`SELECT title, description ,category ,due_date FROM Todo where agent_id=?`,[id],(err,result)=>{
            if(err)
            {
               return callback(err);
            }
            return callback(null,result);
        });
    },
    
    
}