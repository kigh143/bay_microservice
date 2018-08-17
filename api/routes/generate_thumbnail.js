const  express = require("express");
const router = express.Router();
const download = require('image-downloader');
const Jimp = require('jimp');
const checkToken = require("../middleware/ckeckToken");

router.post("/", checkToken, (req, res, next) => {

    Jimp.read(req.body.url, (err, lenna) => {
        if (err){
            res.status(err.status || 500);
            res.json({
                error:{
                    message:err.message
                }
            });
        }

        lenna.resize(50, 50) // resize
        .write('./images/thumbs/img.jpg'); // save

    });


});

module.exports = router;