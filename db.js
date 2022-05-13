const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'formly', {dialect: 'postgres', host: 'localhost'});
 
module.exports = sequelize;