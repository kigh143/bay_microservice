const  express = require("express");
const router = express.Router();
const checkToken = require("../middleware/ckeckToken");

router.get("/", (req, res, next) => {
    res.status(200).json({
        message:"handling the generate thubnail of the image uploaded",
    });  
});

router.post("/", checkToken, (req, res, next) => {
    const image = {
        imgUrl:  req.body.imgUrl,
    };
    res.status(201).json({
        message:"handling the generate thubnail of the image uploaded",
        image:image
    });  
});

module.exports = router;