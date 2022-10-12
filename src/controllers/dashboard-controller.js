const dashboardView = async (req, res) => {
    try {
        res.render("dashboard", {
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    dashboardView
}