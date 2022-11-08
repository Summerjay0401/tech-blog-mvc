const {
    getMyPosts
} = require('./api/posts-controller');

const dashboardView = async (req, res) => {
    try {
        console.log(req.session.loggedInUserData)
        let posts = [];
        if(req.session.loggedInUserData)
            posts = await getMyPosts(req.session.loggedInUserData.id);
        
        res.render("dashboard", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            posts
        });

    } catch (err) {
        console.log(err.message)
        res.status(500).json(err);
    }
};

module.exports = {
    dashboardView
}