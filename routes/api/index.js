const router = require("express").Router();

const auth = require("./auth-routes");
const comment = require("./comment-routes");
const post = require("./post-routes");

router.use("/auth", auth);
router.use("/comment", comment);
router.use("/posts", post);

module.exports = router;
