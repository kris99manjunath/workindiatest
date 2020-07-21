const { create,login } = require('./user_service');
const { createToken } = require('../helperfns/toke_manage');
const { verifyPassword,encryptPassword } = require('../helperfns/encrypt_password');

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
    
    login:(req,res)=>{
        console.log("in controller")
        const id = req.body.agent_id;
        const password = req.body.password;

        login(req.body,async(err,result)=>{
            console.log("login call back")
            if(err)
            {
                console.log(err)
                return res.status(500).json({
                    "status" : "server error",
                });
            }
            console.log(result);
            const tmp = await encryptPassword(password);
            console.log(tmp)
            const flag = await verifyPassword({hash:result,password:password})
            console.log(flag)

            if(!result.length && flag===false)
            {
                return res.status(401).json({
                    "status" : "failed",
                })    
            }
            const token = createToken(id);
            return res.json({
                "status" : "success",
                "agent_id":id,
                "auth_token": token
            }) 
        })
    },
    
};