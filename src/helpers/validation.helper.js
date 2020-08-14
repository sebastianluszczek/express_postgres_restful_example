const Joi = require("@hapi/joi");

const userValidator = data => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    email: Joi.email().required(),
  });

  return schema.validate(data);
};

module.exports = {
  userValidator,
};
