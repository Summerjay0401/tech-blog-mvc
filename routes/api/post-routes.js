const router = require("express").Router();

const {
    createPost,
    deletePost,
    editPost,
} = require("../../controllers/api/posts-controller");

router.post("/create", createPost);
router.put("/edit/:id", editPost);
router.delete("/delete/:id", editPost);

module.exports = router;
