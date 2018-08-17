const  express = require("express");
const router = express.Router();
const checkToken = require("../middleware/ckeckToken");
const  jsonpatch = require("jsonpatch");

router.post("/", checkToken, (req, res, next) => {
    let jsonObj =  req.body.jsonObj;
    let jsonPatchObj = req.body.jsonPatchObj;
    const patcheddoc = jsonpatch.apply_patch(jsonObj, jsonPatchObj);
    res.status(200).json({
        message:patcheddoc,
    });  
});

module.exports = router;