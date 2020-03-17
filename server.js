var express = require("express");
var mongoose = require("mongoose");
var PORT = process.env.PORT || 8808;
var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

var apiRoutes = require("./routes/api-routes");
var htmlRoutes = require("./routes/html-routes");

apiRoutes(app);
htmlRoutes(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout");

app.listen(PORT, function() {
    console.log("App is listening on port http://localhost:" + PORT)
});