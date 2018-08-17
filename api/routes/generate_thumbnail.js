const  express = require("express");
const router = express.Router();
const download = require('image-downloader');
const Jimp = require('jimp');
const checkToken = require("../middleware/ckeckToken");

router.post("/", checkToken, (req, res, next) => {

    const options = {
        url: req.body.url,
        dest: './images/original' 
    };

    download.image(options)
    .then(({ filename, image }) => {
            // open the downloaded file 
        Jimp.read(filename, (err, lenna) => {

            if (err){
                res.status(err.status || 500);
                res.json({
                    error:{
                        message:err.message
                    }
                });
            }

            lenna.resize(50, 50) // resize
            .quality(60) // set JPEG quality
            .write('./images/thumbs/img.jpg'); // save
            
        });

    })
    .catch((err) => {
        res.status(err.status || 500);
        res.json({
            error:{
                message:err.message
            }
        });
    })


});

module.exports = router;