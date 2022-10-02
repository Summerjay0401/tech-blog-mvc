const express = require("express");
const handlebars = require("express-handlebars");

const path = require("path");

const sequelize = require("./config/connection");
const routes = require("./routes");

const session = require("./config/session");

const helpers = require("./utils/helpers");
const handlebars = handlebars.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session);

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening: " + PORT));
});
