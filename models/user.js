const { Model, DataTypes } = require('sequelize');
const bycrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model{
    checkPassword(loginPw){
        return bycrypt.compareSync(loginPw, this.password);
    }
}