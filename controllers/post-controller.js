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

const createPostView = async (req, res) => {
    try {
        console.log("awdawkbdkjwahdkjawhdjakdhwajkhdn")
        console.log(req.body)
        res.render('post-create', {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            pageTitle: 'Create New Post',
        });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
};

const editPostView = async (req, res) => {
    try {
        console.log(req.params)
        res.render('post-edit', {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            pageTitle: 'Edit Post',
        });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
};

module.exports = {
    createPostView,
    editPostView,
    postView
}
