const Authentication = require("./controllers/authentication");
const SubmissionController = require("./controllers/submission");
const passportService = require("./services/passport");
const passport = require("passport");

const userData = passport.authenticate("visitor", { session: false });
const requireAuth = passport.authenticate("authed-user", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function (app) {
  /* user */
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);

  /* submissions */
  app.get("/submissions/", userData, SubmissionController.all);
  app.get(
    "/submissions/create-fake/",
    requireAuth,
    SubmissionController.createFake
  );
  // app.get("/submissions/user/", requireAuth, SubmissionController.all);
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

  app.get("/submissions/:submissionId", userData, SubmissionController.details);
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
};
