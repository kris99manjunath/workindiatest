const { create,read,readOne,update,remove } = require('./todo_service');

module.exports = {
    create : (req,res)=>{
        const agent_id = req.query.agent_id;
        const body = req.body;
        body.agent_id = agent_id;
        create(body,(err,result)=>{
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    "success" : false,
                    "err" : err,
                });
            }
            return res.json({
                "success":true,
                "result":"Created successfully"
            });
        });
    },
    read: (req,res)=>{
        const id = req.query.agent_id;
        read(id,(err,result)=>{
            if(err)
            {
                console.log(err)
                return res.status(500).json({
                    "status":"failed",
                    "err":"Something went wrong",
                });
            }
            return res.json({
                result
            }) 
        })
    },
    

};