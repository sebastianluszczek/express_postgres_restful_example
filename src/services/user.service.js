exports.createUser = async (model, payload) => {
  try {
    return await model.create(payload);
  } catch (error) {
    throw error;
  }
};

exports.findAllUsers = async model => {
  try {
    return await model.findAll();
  } catch (error) {
    throw error;
  }
};

exports.findOneUser = async (model, id) => {
  try {
    return await model.findByPk(id);
  } catch (error) {
    throw error;
  }
};

exports.deleteOneUser = async (model, id) => {
  try {
    return await model.destroy({ where: { id } });
  } catch (error) {
    throw error;
  }
};
