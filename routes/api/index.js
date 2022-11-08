const router = require("express").Router();

const auth = require("./auth-routes");
const comment = require("./comment-routes");

router.use("/auth", auth);
router.use("/comment", comment);
// router.use("/post", post);

module.exports = router;
