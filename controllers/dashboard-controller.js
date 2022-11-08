const {
    getMyPosts
} = require('./api/posts-controller');

const dashboardView = async (req, res) => {
    try {

        const posts = await getMyPosts(req.session.loggedInUserData.id);
        
        res.render("dashboard", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            posts
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    dashboardView
}