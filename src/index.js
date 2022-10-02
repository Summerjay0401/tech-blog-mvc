const express = require("express");
const handlebars = require("express-handlebars");

const path = require("path");

const sequelize = require("./config/connection");
const routes = require("./routes");

const session = require("./config/session");

const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session);

const hbs = handlebars.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening: " + PORT));
});
