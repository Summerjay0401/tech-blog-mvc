const router = require("express").Router();

const apiRoutes = require("./api");
const {
    loginView,
    logoutView,
    signupView
} = require("../controllers/auth-controller");

const {
    dashboardView
} = require("../controllers/dashboard-controller");

const appRoutes = require("./app-routes");
const postsRoutes = require("./posts-routes");

router.use("/", appRoutes);
router.use("/api", apiRoutes);
router.use("/posts", postsRoutes);
router.get("/dashboard", dashboardView);
router.get("/login", loginView);
router.get("/logout", logoutView);
router.get("/signup", signupView);

module.exports = router;
