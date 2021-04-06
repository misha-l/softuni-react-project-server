const Authentication = require("./controllers/authentication");
const SubmissionController = require("./controllers/submission");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("authed-user", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

const optionalJwt = function (req, res, next) {
  if (req.headers.authorization) {
    return passport.authenticate("authed-user", { session: false })(
      req,
      res,
      next
    );
  }
  return next();
};

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.json("Hi there"); // process.env.MONGODB_URI
  });

  /* user */
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);

  app.get("/userdata", optionalJwt, function (req, res) {
    console.log("Req-headers: ", req.headers);
    res.json("Success! You can not see this without a token");
  });

  /* submissions */
  app.get("/submissions/", optionalJwt, SubmissionController.all);
  app.get("/submissions/user/", requireAuth, SubmissionController.all);
  app.post(
    "/submissions/likes/:submissionId",
    requireAuth,
    SubmissionController.like
  );
  app.delete(
    "/submissions/likes/:submissionId",
    requireAuth,
    SubmissionController.dislike
  );
  app.post("/submissions/", requireAuth, SubmissionController.create);

  app.get(
    "/submissions/:submissionId",
    optionalJwt,
    SubmissionController.details
  );
  app.delete(
    "/submissions/:submissionId",
    requireAuth,
    SubmissionController.delete
  );
  app.patch(
    "/submissions/:submissionId",
    requireAuth,
    SubmissionController.update
  );
  app.post("/submissions/upload", requireAuth, SubmissionController.upload);
};
