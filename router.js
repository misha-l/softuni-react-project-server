const Authentication = require("./controllers/authentication");
const SubmissionController = require("./controllers/submission");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function (app) {
  app.get("/", requireAuth, function (req, res) {
    res.send({ hi: "there" });
  });
  /* user */
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);

  /* submissions */
  app.get("/submissions/", SubmissionController.all);
  app.get("/submissions/user/:userId", SubmissionController.all);
  app.get("/submissions/create-fake/", SubmissionController.createFake);
  app.post("/submissions/", SubmissionController.create);
  app.get("/submissions/:submissionId", SubmissionController.details);
  app.delete("/submissions/:submissionId", SubmissionController.delete);
  app.patch("/submissions/:submissionId", SubmissionController.update);

  /* app.get("/submissions/user/:userId", SubmissionController.allByUser); */
};
