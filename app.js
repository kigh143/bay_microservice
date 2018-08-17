const  express = require("express");
const app = express();

const loginRoutes = require("./api/routes/login");
const generateThumbnailRoutes = require("./api/routes/generate_thumbnail");
const patchJsonRoutes = require("./api/routes/patch_json");

app.use("/login", loginRoutes);
app.use("/generate_thumbnail", generateThumbnailRoutes);
app.use("/patch_json", patchJsonRoutes);

module.exports = app;