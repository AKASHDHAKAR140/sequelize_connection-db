const { DataTypes } = require("sequelize")
const sequelize = require("../../db")


const User = sequelize.define('userdata', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}

);
//console.log(books === sequelize.models.books); 
module.exports = User;