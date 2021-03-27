const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { String, ObjectId, Number } = Schema.Types;

const submissionSchema = new Schema({
  authorName: {
    type: String,
    required: true,
  },
  authorAge: {
    type: Number,
    required: true,
  },
  authorPlace: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: ObjectId,
    ref: "user",
  },
  likes: [
    {
      type: ObjectId,
      ref: "user",
    },
  ],
});

// Create the model class
const ModelClass = mongoose.model("submission", submissionSchema);

// Export the model
module.exports = ModelClass;
