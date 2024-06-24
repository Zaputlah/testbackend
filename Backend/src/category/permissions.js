const { hasPermissionsMiddleware } = require("../utils/middlewares");

const categoryPermissionCreate = hasPermissionsMiddleware(["create-categories"]);
const categoryPermissionRead = hasPermissionsMiddleware(["read-categories"]);
const categoryPermissionUpdate = hasPermissionsMiddleware(["update-categories"]);
const categoryPermissionDelete = hasPermissionsMiddleware(["delete-categories"]);

module.exports = {
  categoryPermissionCreate,
  categoryPermissionRead,
  categoryPermissionUpdate,
  categoryPermissionDelete,
};
