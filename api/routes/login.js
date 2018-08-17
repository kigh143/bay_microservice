const  express = require("express");
const router = express.Router();

router.get("/:username/:password", (req, res, next) => {
    const username = req.params.username;
    const password = req.params.password;
    if(password === "katende" && username === "kigh143") {
        res.status(200).json({
            message:"handling requests to login",
            body:{
                username:username,
                password:password
            }
        });
    }else{
        res.status(200).json({
            message:"Wrong username and password supplied.",
        });
    }
    
});

module.exports = router;