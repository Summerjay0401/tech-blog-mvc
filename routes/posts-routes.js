const router = require("express").Router();

const {
    createPostView,
    editPostView,
    postView
} = require("../controllers/post-controller");

router.get("/create", createPostView);
router.get("/:id", postView);
router.get("/update/:id", editPostView);

module.exports = router;
