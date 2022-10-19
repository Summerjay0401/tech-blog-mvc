const router = require("express").Router();

const {
    homeView
} = require("../controllers/api/auth-controller");

router.get("/", homeView);

module.exports = router;
