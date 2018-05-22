const express = require('express');
const bodyparse = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();

// this presents content for the this burger application from the public folder
app.use(express.static("public"));

// this parses the burger application leveraging url encoding
app.use(bodyparse.urlencoded({ extended: true }));

// this parses the application data in JSON format
app.use(bodyparse.json());

// these statements setup Handlebars
const expressHbs = require("express-handlebars");

app.engine("handlebars", expressHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// this imports the necessary application routes
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

// start the Express server and get it ready to listen to client requests
app.listen(PORT, function() {
    console.log("The server has started and is listening on http://localhost:" + PORT);
})

