const homeView = async (req, res) => {
    try {

        res.render("home");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = {
    homeView
}
