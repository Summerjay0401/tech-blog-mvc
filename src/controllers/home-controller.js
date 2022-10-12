const { Op } = require('sequelize');

const {
    Comment,
    Post,
    User
} = require('../models');

const {
    getAllPosts
} = require("./api/posts-controller");

const homeView = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.render("home", {
            posts
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    homeView
}
