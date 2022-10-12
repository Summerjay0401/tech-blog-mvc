const loginView = async (req, res) => {
    try {
        res.render("login", {
            
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

const logoutView = async (req, res) => {
    try {
        res.render("logout", {
            
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

const signupView = async (req, res) => {
    try {
        res.render("signup", {
            
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
