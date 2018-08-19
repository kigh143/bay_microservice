const  express = require("express");
const  jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/:username/:password", (req, res, next) => {
    const username = req.params.username;
    const password = req.params.password;
    const token  = jwt.sign({username:username}, process.env.JWT_KEY, {expiresIn:"2h"});
    res.status(200).json({
        message:"Auth successfull",
        jwt:token
    });
});

module.exports = router;