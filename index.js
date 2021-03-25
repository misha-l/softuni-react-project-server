// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

const fs = require("fs");

// DB Setup
mongoose.connect("mongodb://127.0.0.1:27017/competition");

// App Setup
app.use(morgan("combined"));
/*
const accessLogStream = fs.createWriteStream(__dirname + "access.log", {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));
*/
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
