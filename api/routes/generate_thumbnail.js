const  express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message:"handling the generate thubnail of the image uploaded",
    });  
});

module.exports = router;