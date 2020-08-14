const {
  createUser,
  findAllUsers,
  findOneUser,
  deleteOneUser,
} = require("../services/user.service");
const { ErrorHandler } = require("../helpers/error.helper");
const { userValidator } = require("../helpers/validation.helper");

// Create and Save a new User
exports.create = async (req, res, next) => {
  try {
    // Validate request
    const { error } = userValidator(req.body.data);
    if (error) {
      throw new ErrorHandler(400, error.details[0].message);
    }
    const { firstName, lastName, email } = req.body.data;
    const newUser = {
      firstName,
      lastName,
      email,
    };
    const response = await createUser(newUser);
    res.status(201).json({
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

// Retrieve all Users from the database.
exports.findAll = async (req, res, next) => {
  try {
    const response = await findAllUsers();
    res.json({ data: response });
  } catch (err) {
    next(err);
  }
};

// Find a single User with an id
exports.findOne = async (req, res, next) => {
  const id = req.params.id;

  try {
    const response = await findOneUser(id);
    if (!response) {
      throw new ErrorHandler(404, `Issue ${id} not found`);
    }
    res.json({ data: response });
  } catch (err) {
    next(err);
  }
};

// Delete one User with id
exports.deleteOne = async (req, res, next) => {
  const id = req.params.id;

  try {
    const findRes = await findOneUser(id);
    if (!findRes) throw new ErrorHandler(404, `User: ${id} not found`);

    const deleteRes = await deleteOneUser(id);
    if (deleteRes !== 1) {
      throw new ErrorHandler(400, `Cannot delete User ${id}`);
    }
    res.json({ data: findRes });
  } catch (err) {
    next(err);
  }
};
