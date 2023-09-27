const Sequelize = require('sequelize');

const sequelize = new Sequelize('employee', 'root', "", {
    host: 'localhost',
    logging: false,
    dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

});

try {

    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
module.exports = sequelize;