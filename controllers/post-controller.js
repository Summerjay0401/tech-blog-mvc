const {
    getPostById
} = require('./api/posts-controller');

const postView = async (req, res) => {
    try {

        const post = await getPostById(req.params.id);
        console.log(post.get({ plain: true }))
        res.render('post', {
            pageTitle: 'Post',
            post: post.get({ plain: true })
        });

    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    postView
}
