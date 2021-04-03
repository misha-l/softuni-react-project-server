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
mongoose.connect("mongodb://127.0.0.1:27017/competition2");

// App Setup
app.use(morgan("combined"));
app.use(cors());
// app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.json()).use(bodyParser.urlencoded());
app.use(express.static("public"));
app.use(express.static("uploads"));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
