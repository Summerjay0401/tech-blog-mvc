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

module.exports = {
    getAllPosts,
    getPostById
}
