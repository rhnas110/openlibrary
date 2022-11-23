'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transactions)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NIM: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len : [10]
      },
      unique: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    verify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    profilePic:{
      type: DataTypes.STRING
    }
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};