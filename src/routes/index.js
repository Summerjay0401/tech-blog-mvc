const router = require("express").Router();

// const apiRoutes = require("./api");
const {
    loginView,
    logoutView,
    signupView
} = require("../controllers/auth-controller");

const {
    dashboardView
} = require("../controllers/dashboard-controller");

const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);
router.get("/dashboard", dashboardView);
router.get("/login", loginView);
router.get("/logout", logoutView);
router.get("/signup", signupView);
// router.use("/api", apiRoutes);

module.exports = router;
