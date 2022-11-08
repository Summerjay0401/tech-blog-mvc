const loginView = async (req, res) => {
    try {
        res.render("login", {
            pageTitle: 'Login',
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

const logoutView = async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } 
        
        res.render("login");

    } catch (err) {
        res.status(500).json(err);
    }
};

const signupView = async (req, res) => {
    try {
        res.render("signup", {
            pageTitle: 'Signup',
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    loginView,
    logoutView,
    signupView
}
