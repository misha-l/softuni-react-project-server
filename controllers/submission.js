const Submission = require("../models/submission");
const passport = require("passport");
const ObjectId = require("mongodb").ObjectID;

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/images");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

exports.upload = function (req, res, next) {
  upload(req, res, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.send(req.file);
  });
};

exports.all = function (req, res, next) {
  console.log("Req-headers", req.headers);
  /* load all submissions by default */
  let filter = null;
  /* load only user's submissions if parameter is present */
  if (req.query && req.query.byUser && req.user) {
    filter = { creator: req.user._id };
  }

  Submission.find(filter)
    .lean()
    .then((submissions) => {
      const processedSubmissions = submissions.map((submission) => {
        const actionsAllowed = req.user && req.user._id ? true : false;
        /* if submission belongs to user */
        const createdByUser =
          req.user && String(req.user._id) === String(submission.creator)
            ? true
            : false;
        let likedByUser = false;
        submission.likes.forEach((like) => {
          if (req.user && String(req.user._id) === String(like))
            likedByUser = true;
        });
        return {
          ...submission,
          actionsAllowed: actionsAllowed,
          createdByUser: createdByUser,
          likedByUser: likedByUser,
        };
      });
      // console.log("processedSubmissions: ", processedSubmissions);
      res.json(processedSubmissions);
    })
    .catch((e) => console.log(e));
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
      const actionsAllowed = req.user && req.user._id ? true : false;
      let likedByUser = false;
      detail.likes.forEach((like) => {
        if (req.user && String(req.user._id) === String(like))
          likedByUser = true;
      });
      const createdByUser =
        req.user && String(req.user._id) === String(detail.creator)
          ? true
          : false;

      res.json({ ...detail, createdByUser, likedByUser, actionsAllowed });
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
      res.json({
        _id: updatedSubmission._id,
        likes: updatedSubmission.likes,
        likedByUser: true,
      });
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
      res.json({
        _id: updatedSubmission._id,
        likes: updatedSubmission.likes,
        likedByUser: false,
      });
    })
    .catch((err) => res.json({ error: err.message }));
};
