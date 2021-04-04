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

const mongoUri = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://127.0.0.1:27017/competition_app";

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      // console.log(" Mongoose is connected");
    }
  );
} catch (e) {
  // console.log("Mongoose could not connect");
}

/* possible formats to try with Atlas */
// "mongodb+srv://MKrusharska:___@mishacluster.2635z.mongodb.net/competition?retryWrites=true&w=majority"
// "mongodb://MKrusharska:___@mishacluster-shard-00-00.2635z.mongodb.net/competition?retryWrites=true&w=majority"

// App Setup
app.use(morgan("combined"));
app.use(cors());
// app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.json()).use(bodyParser.urlencoded());
/* register static files directories */
app.use(express.static("public"));
app.use(express.static("uploads"));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
