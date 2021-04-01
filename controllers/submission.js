const Submission = require("../models/submission");
const passport = require("passport");
const ObjectId = require("mongodb").ObjectID;

exports.all = function (req, res, next) {
  console.log("All-req-query", req.query);
  /* load all submissions by default */
  let filter = null;
  /* load only user's submissions if parameter is present */
  if (req.query && req.query.byUser) {
    filter = { creator: req.user._id };
  }
  /*
  if (typeof req.params.userId !== "undefined")
    filter = { creator: req.params.userId };
  */

  Submission.find(filter)
    .lean()
    .then((submissions) => {
      const processedSubmissions = submissions.map((submission) => {
        let likedByUser = false;
        submission.likes.forEach((like) => {
          if (String(req.user._id) === String(like)) likedByUser = true;
        });
        /* if submission belongs to user */
        const createdByUser =
          String(req.user._id) === String(submission.creator) ? true : false;
        return {
          ...submission,
          createdByUser: createdByUser,
          likedByUser: likedByUser,
        };
      });
      console.log("processedSubmissions: ", processedSubmissions);
      res.json(processedSubmissions);
    })
    .catch((e) => console.log(e));
};

exports.createFake = function (req, res, next) {
  console.log("createFake-user", req.user);
  const response = {
    _id: req.user._id,
    email: req.user.email,
  };
  res.json(response);
};

exports.create = function (req, res, next) {
  const submissionData = req.body;
  Submission.create({
    ...submissionData,
    creator: req.user._id,
  }).then((createdSubmission) => {
    res.json(createdSubmission);
  });
};

exports.details = function (req, res, next) {
  Submission.findOne({ _id: req.params.submissionId })
    .lean()
    .then((detail) => {
      let likedByUser = false;
      detail.likes.forEach((like) => {
        if (String(req.user._id) === String(like)) likedByUser = true;
      });
      const createdByUser =
        String(req.user._id) === String(detail.creator) ? true : false;

      res.json({ ...detail, createdByUser, likedByUser });
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

exports.like = function (req, res, next) {
  Submission.findOneAndUpdate(
    { _id: req.params.submissionId },
    {
      $addToSet: {
        likes: req.user._id, //ObjectId("60618cdd4dab59310468ba39"), //
      },
    },
    { new: true }
  )
    .then((updatedSubmission) => {
      res.json({ likes: updatedSubmission.likes, likedByUser: true });
      // res.json(updatedSubmission);
    })
    .catch((err) => res.json({ error: err.message }));
};

exports.dislike = function (req, res, next) {
  Submission.findOneAndUpdate(
    { _id: req.params.submissionId },
    {
      $pull: {
        likes: req.user._id, //ObjectId("60618cdd4dab59310468ba39"), //
      },
    },
    { new: true }
  )
    .then((updatedSubmission) => {
      res.json({ likes: updatedSubmission.likes, likedByUser: false });
    })
    .catch((err) => res.json({ error: err.message }));
};
