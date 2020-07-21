const express = require('express');

const bodyParser = require('body-parser');

const userRouter = require('./user/user_routes');

const todoRouter = require('./todo/todo_routes');

const app = express();

const { verifyToken } = require("./helperfns/toke_manage");

app.use(bodyParser.json());

require('dotenv').config();

app.use('/app/agent',userRouter);

app.use('/',(req,res,next)=>{
    const token = req.header("auth-token"); 
    console.log(token);
    const id = req.params.id;
    if (!token) {
        console.log("lol");
        return res.status(403).json({ error: 'Access Denied' });
      }
      try{
       console.log(verifyToken(token))
      if(verifyToken(token))
      next();
      }
      catch(err)
      {
        return res.status(403).json({ error: 'Access Denied' });
      }
      
})

app.use('/app',todoRouter);

app.use('/',(req,res)=>{
    res.status(404).json("Page Not Found")
})



app.listen(process.env.NODE_PORT,(err)=>{
    if(err)
    console.log(err);
    else
    console.log(`Server started in port ${process.env.NODE_PORT}`)
});