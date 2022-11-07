const { Op } = require('sequelize');

const {
    Comment,
    Post,
    User
} = require('../models');

const {
    getAllPosts
} = require('./api/posts-controller');

const homeView = async (req, res) => {
    try {
        
        const posts = await getAllPosts();

        res.render('home', {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            pageTitle: 'Home',
            posts
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    homeView
}
