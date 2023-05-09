const DataTypes = require("sequelize").DataTypes;
const _comments = require("./comments");
const _images = require("./images");
const _save_image = require("./save_image");
const _users = require("./users");

function initModels(sequelize) {
  const comments = _comments(sequelize, DataTypes);
  const images = _images(sequelize, DataTypes);
  const save_image = _save_image(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  images.belongsToMany(users, { as: 'user_id_users', through: save_image, foreignKey: "image_id", otherKey: "user_id" });
  users.belongsToMany(images, { as: 'image_id_images', through: save_image, foreignKey: "user_id", otherKey: "image_id" });
  comments.belongsTo(images, { as: "image", foreignKey: "image_id"});
  images.hasMany(comments, { as: "comments", foreignKey: "image_id"});
  save_image.belongsTo(images, { as: "image", foreignKey: "image_id"});
  images.hasMany(save_image, { as: "save_images", foreignKey: "image_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  images.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(images, { as: "images", foreignKey: "user_id"});
  save_image.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(save_image, { as: "save_images", foreignKey: "user_id"});

  return {
    comments,
    images,
    save_image,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
