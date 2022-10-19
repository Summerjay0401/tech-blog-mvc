const router = require("express").Router();

const {
    homeView
} = require("../controllers/home-controller");

router.get("/", homeView);

module.exports = router;
