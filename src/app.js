const express = require("express");
const app = express();

const { handleError, logError } = require("./helpers/error.helper");

app.use(express.json());

const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({
    message: "succes",
  });
});

app.use("/api/users", require("./routes/user.routes"));

app.use(logError);
app.use(handleError);

module.exports = app;
