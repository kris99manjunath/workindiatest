const router = require('express').Router();
const { create,login,update,remove } = require('./user_controller');

router.post("/", create);

router.post("/auth", login);


module.exports = router;