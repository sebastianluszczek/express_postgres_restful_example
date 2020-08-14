const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  mode: process.env.NODE_ENV,
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_pass: process.env.DB_PASS,
  db_name: process.env.DB_NAME,
  db_dialect: "postgres",
};
