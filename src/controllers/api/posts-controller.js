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

module.exports = {
    getAllPosts
}
