const  express = require("express");
const router = express.Router();
const Jimp = require('jimp');
const uniqid = require('uniqid');
const checkToken = require("../middleware/ckeckToken");

router.post("/", checkToken, (req, res, next) => {
    Jimp.read(req.body.url, (err, file) => {
        if (err){
            res.status(err.status || 500);
            res.json({
                error:{
                    message:err.message
                }
            });
        }
        const uniqueFileName ='./images/thumbs/'+uniqid()+'50x50.jpg';
        const doneCropping = file.resize(50, 50).write(uniqueFileName);
        if( doneCropping ){
            res.status(200).json({
                message:"image resized",
                img_url:uniqueFileName
            });
        }
        
    });
});

module.exports = router;