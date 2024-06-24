const { default: mongoose } = require("mongoose");

const categoryObject = {
  name: { type: String, required: true },
  description: { type: String },
  isDelete: { type: Boolean, default: false },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
  },
};

const categorySchema = new mongoose.Schema(categoryObject, {
  versionKey: false,
  timestamps: true,
});

const Category = new mongoose.model("Category", categorySchema);

module.exports = {
  Category,
  categoryObject,
  categorySchema,
};
