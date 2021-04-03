const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { String } = Schema.Types;

const testSchema = new Schema({
  polence2: {
    type: String,
    required: false,
  },
});

// Create the model class
const ModelClass = mongoose.model("test2", testSchema);

// Export the model
module.exports = ModelClass;
