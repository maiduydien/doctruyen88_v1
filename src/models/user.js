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
    }
  };
  
  User.init({
    
    id:{type:DataTypes.UUID,primaryKey:true,defaultValue:require("sequelize").UUIDV4},
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    email: DataTypes.STRING,
    roleid:DataTypes.STRING,
    gender:DataTypes.BOOLEAN,
    img:DataTypes.STRING,
    loginName:DataTypes.STRING,
    password:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};