const { where } = require('sequelize');
const {
    Comment,
    Post,
    User
} = require('../../models');

const getAllPosts = async () => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User
                },
                {
                    model: Comment
                }
            ],
            order: [['createdAt', 'DESC']],
        });

        return postData.map((post) => post.get({ plain: true }));

    } catch (err) {
        throw err;
    }
} 

const getMyPosts = async (userId) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: userId
            },
            include: [
                {
                    model: User
                },
                {
                    model: Comment
                }
            ],
            order: [['createdAt', 'DESC']],
        });

        return postData.map((post) => post.get({ plain: true }));

    } catch (err) {
        throw err;
    }
} 

const getPostById = async (id) => {
    try {
        const post = await Post.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: User
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User
                        }
                    ]
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return post;

    } catch (err) {
        throw err;
    }
} 
const createPost = async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.loggedInUserData.id
        });

        return res.status(200).json(post);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
} 
const editPost = async (req, res) => {
    try {
        const comment = await Post.update({
            title: req.body.title,
            content: req.body.content,
        }, {
            where: {
                id: req.params.id,
                user_id: req.session.loggedInUserData.id
            }
        });

        return res.status(200).json(comment);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
} 
const deletePost = async (req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        });

        return res.status(404).json("Deleted");

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
} 

module.exports = {
    createPost,
    editPost,
    deletePost,
    getAllPosts,
    getMyPosts,
    getPostById
}
