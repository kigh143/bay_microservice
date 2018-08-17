const  express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message:"handling the patch of json data",
    });  
});

module.exports = router;