"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransactionsDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransactionsDetails.belongsTo(models.Books);
      TransactionsDetails.belongsTo(models.Transactions);
    }
  }
  TransactionsDetails.init(
    {},
    {
      sequelize,
      modelName: "TransactionsDetails",
    }
  );
  return TransactionsDetails;
};
