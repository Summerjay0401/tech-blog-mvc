const {
    User
} = require('../../models');

const login = async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!userData) {
            res.status(400).json({
                message: "Incorrect username or password. Please try again!",
            });
            return;
        }
        //checks that password is valid using custom instance method in ./models/user.js
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: "Incorrect email or password. Please try again!",
            });
            return;
        }
        //save data to session for use elsewhere
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.loggedInUserData = userData;
            console.log("🚀", req.session.cookie);

            res.status(200).json({
                user: userData,
                message: "You are now logged in!",
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const signup = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            isAdmin: true,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.loggedInUserData = user;
            return res.status(200).json(user);
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

module.exports = {
    login,
    signup
}
