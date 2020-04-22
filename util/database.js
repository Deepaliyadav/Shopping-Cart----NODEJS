const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Deepali@19', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;