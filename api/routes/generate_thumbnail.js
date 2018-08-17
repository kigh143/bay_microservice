const  express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message:"handling the generate thubnail of the image uploaded",
    });  
});

router.post("/", (req, res, next) => {
    const image = {
        width:  req.body.width,
        height: req.body.height
    };
    res.status(201).json({
        message:"handling the generate thubnail of the image uploaded",
        image:image
    });  
});

module.exports = router;