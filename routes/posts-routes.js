const router = require("express").Router();

const {
    postView
} = require("../controllers/post-controller");

router.get("/:id", postView);

module.exports = router;
