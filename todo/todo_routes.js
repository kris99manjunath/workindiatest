const router = require('express').Router();
const { create,read,readOne,update,remove } = require('./todo_controller');

router.post("/sites", create);

router.get("/sites", read);



module.exports = router;