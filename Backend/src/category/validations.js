const { textField } = require("../utils/fields");
const { validationMiddleware } = require("../utils/middlewares");

const categoryValidationCreate = validationMiddleware([
  textField("name"),
  textField("description", true), 
]);

const categoryValidationUpdate = validationMiddleware([
  textField("name"),
  textField("description", true), 
]);

const categoryValidationDelete = validationMiddleware([
  textField("name"),
  textField("description", true), 
]);

module.exports = {
  categoryValidationCreate,
  categoryValidationUpdate,
  categoryValidationDelete,
};
