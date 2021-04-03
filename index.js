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
// mongoose.connect("mongodb://127.0.0.1:27017/competition2");

// mongoose.connect("mongodb://127.0.0.1:27017/competition2");

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}

// "mongodb+srv://MKrusharska:RdpSVcbmLFs57Rpi@mishacluster.2635z.mongodb.net/competition?retryWrites=true&w=majority"
// "mongodb://MKrusharska:RdpSVcbmLFs57Rpi@mishacluster-shard-00-00.2635z.mongodb.net/competition?retryWrites=true&w=majority"

/*
let mongoUri = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://127.0.0.1:27017/competition2";

mongoose.connect(mongoUri);
*/

// const uri = process.env.MONGODB_URI;

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
