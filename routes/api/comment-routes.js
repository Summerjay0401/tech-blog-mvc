const router = require("express").Router();

const {
    createComment
} = require("../../controllers/api/comment-controller");

router.post("/", createComment);

module.exports = router;
