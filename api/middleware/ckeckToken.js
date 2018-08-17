/*
  Middleware to check if the user is authorized to access the protected routes.
*/
const  jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; // user Bearer
        const decoded  = jwt.verify(token,  process.env.JWT_KEY);
        req.userData = decoded;
        next();
    }catch( error ) {
        res.status(401).json({
            message:"Auth failed"
        })
    }


}  