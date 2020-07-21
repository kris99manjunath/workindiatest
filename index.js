const express = require('express');

const bodyParser = require('body-parser');

const userRouter = require('./user/user_routes');

const todoRouter = require('./todo/todo_routes');

const app = express();

app.use(bodyParser.json());

require('dotenv').config();

app.use('/app/agent',userRouter);

app.use('/',(req,res,next)=>{
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
      }
      next();
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