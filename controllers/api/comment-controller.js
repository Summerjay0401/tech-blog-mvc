const {
    Comment
} = require('../../models');

const createComment = async (req, res) => {
    try {
        const comment = await Comment.create({
            post_id: req.body.postId,
            comment: req.body.comment,
            user_id: req.session.loggedInUserData.id
        });

        return res.status(200).json(comment);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

module.exports = {
    createComment
}

