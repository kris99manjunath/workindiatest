const { create,login,update,remove } = require('./user_service');

module.exports = {
    create : (req,res)=>{
        const body = req.body;
        let error = null
        create(body,(err,result)=>{
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    "status" : "failed",
                    "err" : error,
                });
            }
            return res.json({
                "status":"account created"
            });
        });
    },
    
    login: (req,res)=>{
        
        const id = req.body.agent_id;
        const password = req.body.password;

        login(id,(err,result)=>{
            if(err)
            {
                console.log(err)
                return res.status(500).json({
                    "status" : "server error",
                });
            }
            console.log(result);
            if(!result.length || result[0].password !== password)
            {
                return res.status(401).json({
                    "status" : "failed",
                })    
            }
            return res.json({
                "status" : "success",
                "agent_id":result[0].agent_id
            }) 
        })
    },
    
};