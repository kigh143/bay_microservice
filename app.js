const  express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const loginRoutes = require("./api/routes/login");
const generateThumbnailRoutes = require("./api/routes/generate_thumbnail");
const patchJsonRoutes = require("./api/routes/patch_json");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use( (req, res, next)  => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Contorl-Allow-Headers', 'Orign,X-Requested-With, Content-Type, Accept, Authorization ')
    if( req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
       return res.status(200).json({});
    }
    next();
});


app.use("/login", loginRoutes);
app.use("/generate_thumbnail", generateThumbnailRoutes);
app.use("/patch_json", patchJsonRoutes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use( (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports = app;