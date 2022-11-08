const router = require("express").Router();

const {
    createPostView,
    editPostView,
} = require("../../controllers/post-controller");

router.get("/create", createPostView);
router.get("/edit/:id", editPostView);

module.exports = router;
