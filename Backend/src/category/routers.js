const express = require("express");
const { jwtAuthMiddleware } = require("../utils/middlewares");
const {
  categoryPermissionRead,
  categoryPermissionUpdate,
  categoryPermissionDelete,
  categoryPermissionCreate,
} = require("./permissions");
const {
  categoryControllerList,
  categoryControllerDetail,
  categoryControllerUpdate,
  categoryControllerDelete,
  categoryControllerCreate,
} = require("./controllers");

const {
  categoryValidationCreate,
  categoryValidationUpdate,
} = require("./validations");

const categoryRouter = express.Router();
const CATEGORY_PATH = "/category";

categoryRouter.get(
  "/",
  [jwtAuthMiddleware, categoryPermissionRead],
  categoryControllerList
);

categoryRouter.post(
  "/",
  [jwtAuthMiddleware, categoryValidationCreate, categoryPermissionCreate],
  categoryControllerCreate
);

categoryRouter.get(
  "/:id",
  [jwtAuthMiddleware, categoryPermissionRead],
  categoryControllerDetail
);

categoryRouter.put(
  "/:id",
  [jwtAuthMiddleware, categoryValidationUpdate, categoryPermissionUpdate],
  categoryControllerUpdate
);

categoryRouter.delete(
  "/:id",
  [jwtAuthMiddleware, categoryPermissionDelete],
  categoryControllerDelete
);

module.exports = {
  categoryRouter,
  CATEGORY_PATH,
};
