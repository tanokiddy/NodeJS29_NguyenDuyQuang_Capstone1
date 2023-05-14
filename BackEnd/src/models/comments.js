const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return comments.init(sequelize, DataTypes);
}

class comments extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    comment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'images',
        key: 'image_id'
      }
    },
    comment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(10000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comment_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "image_id",
        using: "BTREE",
        fields: [
          { name: "image_id" },
        ]
      },
    ]
  });
  }
}
