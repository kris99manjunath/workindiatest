const router = require('express').Router();
const { create,read,readOne,update,remove } = require('./todo_controller');

router.post("/sites", create);

router.get("/sites", read);

router.use("/",(req,res)=>{
    return  res.status(404).json("Page Not found")
})


module.exports = router;