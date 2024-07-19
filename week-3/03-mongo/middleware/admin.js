// Middleware for handling auth

const {Admin} = require('../db/index.js')


function adminMiddleware(req, res, next) {
    const { username, password } = req.headers;
    if (!username || !password) {
        throw new Error("wrong inputs");
    }
    Admin.findOne({ username, password })
        .then(user => {
            if (!user) {
                return res.status(403).json({ msg: "user doesn't exist" });
            }
            next();
        })
        .catch(err => {
            res.status(500).json({ msg: "Internal server error" });
        });
}

module.exports = adminMiddleware;