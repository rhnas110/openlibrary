"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transactions.belongsTo(models.User)
      Transactions.hasMany(models.TransactionsDetails)
    }
  }
  Transactions.init(
    {
      borrowDate: { type: DataTypes.DATEONLY, allowNull: false },
      receiveDate: { type: DataTypes.DATEONLY, allowNull: false },
      status: {
        type: DataTypes.ENUM("Cart", "Borrow", "Done"),
        defaultValue: "Cart",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Transactions",
    }
  );
  return Transactions;
};
