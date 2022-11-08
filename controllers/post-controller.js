const {
    getPostById
} = require('./api/posts-controller');

const postView = async (req, res) => {
    try {

        const post = await getPostById(req.params.id);
        
        res.render('post', {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
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
