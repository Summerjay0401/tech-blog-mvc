const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const conn = require("./connection");

const config = {
    secret: process.env.SESSION_SECRET || "Secret key goes here",
    cookie: {
        maxAge: 28800000,
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: conn,
    }),
};

module.exports = session(config);
