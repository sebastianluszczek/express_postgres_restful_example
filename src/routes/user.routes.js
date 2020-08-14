const {
  create,
  findAll,
  findOne,
  deleteOne,
} = require("../controllers/user.controller.js");

const router = require("express").Router();

// Create a new User
router.post("/", create);

// Retrieve all Users
router.get("/", findAll);

// Retrieve a single User with id
router.get("/:id", findOne);

// Delete single User with id
router.delete("/:id", deleteOne);

module.exports = router;
