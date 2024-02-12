const jwt = require("jsonwebtoken");
const secret = 'WOW SO SECRET';
module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({verified: false, error: err});
        }
        else {
            next();
        }
    });
}