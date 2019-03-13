// require npm express and basic properties for the express server
var express = require("express");

// our express server in a variable
var app = express();

// Initial port 
var PORT = process.env.PORT || 8080;

// using urlendcoded and json to help in parsing the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route files that express allows us to access with (app) and ./
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// lisen to showcase that we're actually using the server on the PORT above
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
