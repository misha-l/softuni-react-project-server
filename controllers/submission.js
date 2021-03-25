const Submission = require("../models/submission");
const passport = require("passport");
const ObjectId = require("mongodb").ObjectID;

exports.all = function (req, res, next) {
  Submission.find()
    .lean()
    .then((submissions) => {
      res.json(submissions);
    })
    .catch((e) => console.log(e));
};

exports.createFake = function (req, res, next) {
  const submissionData = {
    authorName: "Rado",
    authorAge: 3,
    authorPlace: "Враца",
    image: "praseta.jpg",
    description: "Ужасна рисунка",
    creator: ObjectId("605b2e2c1b159b41b41e333e"),
  };
  Submission.create(submissionData).then((createdSubmission) => {
    res.json(createdSubmission);
  });
};

exports.create = function (req, res, next) {
  const submissionData = req.body;
  Submission.create({
    ...submissionData,
    creator: ObjectId("605b2e2c1b159b41b41e333e"),
  }).then((createdSubmission) => {
    res.json(createdSubmission);
  });
};

exports.details = function (req, res, next) {
  Submission.findOne({ _id: req.params.submissionId })
    .lean()
    .then((detail) => {
      res.json(detail);
    });
};

exports.delete = function (req, res, next) {
  Submission.deleteOne({ _id: req.params.submissionId }).then((result) => {
    res.status(200).json({ code: 200, message: "Submission deleted" });
  });
};

exports.update = function (req, res, next) {
  const submissionData = {
    authorName: req.body.authorName,
    authorAge: req.body.authorAge,
    authorPlace: req.body.authorPlace,
    description: req.body.description,
  };
  Submission.findOneAndUpdate(
    { _id: req.params.submissionId },
    { $set: submissionData }
  ).then((updatedSubmission) => {
    res.json(updatedSubmission);
  });
};
