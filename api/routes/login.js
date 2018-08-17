const  express = require("express");
const  jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/:username/:password", (req, res, next) => {
    const username = req.params.username;
    const password = req.params.password;
    if(password === "katende" && username === "kigh143") {
        const token  = jwt.sign({username:username, password:password}, 
            process.env.JWT_KEY, {
                expiresIn:"1h"
            })
        res.status(200).json({
            message:"Auth successfull",
            body:{
                username:username,
                password:password
            },
            token:token
        });
    }else{
        res.status(401).json({
            message:"Auth failed",
        });
    }
    
});

module.exports = router;