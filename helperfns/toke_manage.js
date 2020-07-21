const { sign,verify } = require('jsonwebtoken');

module.exports = {
    createToken: (id) => {
        const token = sign(id , process.env.SECRET_KEY);
        return token;
    },

    verifyToken: (token) => {
        const check = verify(token, process.env.SECRET_KEY);
        return check;
    },
}