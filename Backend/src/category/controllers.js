const { exceptionHandler, Error404, Error403 } = require("../utils/errors");
const { filterSearch } = require("../utils/filters");
const { buildPagination } = require("../utils/paginations");
const { Category } = require("./models"); 

const categoryControllerList = async (req, res) => {
  try {
    let result = Category.find({ owner: res.locals.user._id, isDelete: false });
    result = filterSearch(req, result);
    result = await buildPagination(req, result);
    res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoryControllerCreate = async (req, res) => {
  try {
    const result = await Category.create({
      ...res.locals.matchedData,
      owner: res.locals.user._id,
    });
    return res.status(201).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoryControllerDetail = async (req, res) => {
  try {
    const result = await Category.findOne({
      _id: req.params.id,
      isDelete: false,
    });

    if (!result) {
      throw new Error404();
    }

    if (result.owner._id.toString() !== res.locals.user._id.toString()) {
      throw new Error403();
    }

    return res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoryControllerUpdate = async (req, res) => {
  try {
    let result = await Category.findOne({
      _id: req.params.id,
      isDelete: false,
    });
    if (!result) {
      throw new Error404();
    }

    if (result.owner._id.toString() !== res.locals.user._id.toString()) {
      throw new Error403();
    }

    result = await Category.findOneAndUpdate(
      { _id: req.params.id },
      res.locals.matchedData,
      { new: true }
    );
    return res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoryControllerDelete = async (req, res) => {
  try {
    const result = await Category.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: res.locals.user._id,
        isDelete: false,
      },
      { isDelete: true }
    );

    if (!result) {
      throw new Error404();
    }

    return res.status(204).json(null);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

module.exports = {
  categoryControllerList,
  categoryControllerCreate,
  categoryControllerDetail,
  categoryControllerUpdate,
  categoryControllerDelete,
};
