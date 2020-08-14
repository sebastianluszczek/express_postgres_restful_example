const db = require("../models");
const User = db.users;

exports.createUser = async payload => {
  try {
    return await User.create(payload);
  } catch (error) {
    throw error;
  }
};

exports.findAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw error;
  }
};

exports.findOneUser = async id => {
  try {
    return await User.findByPk(id);
  } catch (error) {
    throw error;
  }
};

exports.deleteOneUser = async id => {
  try {
    return await User.destroy({ where: { id } });
  } catch (error) {
    throw error;
  }
};
