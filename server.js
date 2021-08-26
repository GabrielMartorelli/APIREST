const express = require("express");
app = express();

port = 3000;
const routes = require("./api/routes/livroRoutes");

mongoose = require("mongoose");
livro = require("./api/models/livroModel");
bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/livraria");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);
